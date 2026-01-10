import { NextApiRequest, NextApiResponse } from "next";
import { ValidationError } from "yup";

import { mailValidationSchema } from "@/components/contact-form/contact-form";
import { rateLimiterApi, getUserId } from "@/utility/rate-limiter";
import { sendMail } from "@/utility/sendMail";

const REQUEST_PER_HOUR = 5 as const;
const RATELIMIT_DURATION = 3600000 as const;
const MAX_USER_PER_SECOND = 100 as const;

const limiter = rateLimiterApi({
  interval: RATELIMIT_DURATION,
  uniqueTokenPerInterval: MAX_USER_PER_SECOND,
  getUserId,
});

export type MailRequestBody = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ status: number; message: string | string[] }>,
) => {
  try {
    console.log("[API] Incoming request:", {
      method: req.method,
      ip: req.socket.remoteAddress,
      userAgent: req.headers["user-agent"],
    });

    const { method } = req;

    if (method !== "POST") {
      console.warn("[API] Invalid method:", method);
      res.status(405).json({
        status: 405,
        message: "Method not allowed",
      });
      return;
    }

    const body: MailRequestBody = req.body;
    console.log("[API] Request body received");

    const isRateLimited = await limiter.check(res, req, REQUEST_PER_HOUR);
    if (isRateLimited.status !== 200) {
      console.warn("[API] Rate limited");
      return;
    }

    try {
      await mailValidationSchema.validate(body, { abortEarly: false });
      console.log("[API] Validation passed");
    } catch (validationError) {
      console.error("[API] Validation failed");

      if (validationError instanceof ValidationError) {
        res.status(422).json({
          status: 422,
          message: validationError.errors,
        });
      } else {
        res.status(500).json({
          status: 500,
          message: "Internal server error",
        });
      }
      return;
    }

    const { name, email, subject, message } = body;

    console.log("[API] Sending mail...");
    const response = await sendMail(name, email, subject, message);

    console.log("[API] Mail response:", response);
    res.status(response.status).send(response);
  } catch (error: any) {
    console.error("[API] Unhandled error:", error);

    if (error?.status === 429) {
      res.status(429).json({
        status: 429,
        message: "Rate limit exceeded",
      });
    } else {
      res.status(error.status || 500).json({
        status: error.status || 500,
        message: error.message || "Internal server error",
      });
    }
  }
};

export default handler;
