import { createTransport } from "nodemailer";

export const sendMail = async function (
  name: string,
  email: string | "SELF",
  subject: string,
  message: string,
): Promise<{ status: number; message: string }> {
  const user = process.env.NODEMAILER_USER;
  const pass = process.env.NODEMAILER_PASS;

  console.log("[MAIL] Environment check:", {
    hasUser: !!user,
    hasPass: !!pass,
  });

  // ❗ FIXED BUG: this should be OR, not AND
  if (!user || !pass) {
    console.error("[MAIL] Missing env variables");
    return Promise.resolve({
      status: 500,
      message: "Mail service not configured",
    });
  }

  const transporter = createTransport({
    service: "gmail",
    auth: {
      user,
      pass,
    },
  });

  console.log("[MAIL] Transporter created");

  const mailOptions = {
    from: user,
    to: user,
    subject: "Portfolio: [" + subject + " ]",
    text: `${name}: <${email}>\n${message}`,
  };

  console.log("[MAIL] Mail options prepared:", {
    from: mailOptions.from,
    to: mailOptions.to,
    subject: mailOptions.subject,
  });

  return new Promise((resolve) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("[MAIL] Send failed:", {
          message: error.message,
          code: (error as any)?.code,
          response: (error as any)?.response,
        });

        resolve({
          status: 500,
          message: "Failed to send mail",
        });
      } else {
        console.log("[MAIL] Mail sent successfully:", {
          messageId: info?.messageId,
          response: info?.response,
        });

        resolve({
          status: 200,
          message: "Mail send successfully",
        });
      }
    });
  });
};
