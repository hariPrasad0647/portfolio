import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Devi Pickles",
    href: "/projects",
    tags: ["Nextjs", "Tailwindcss", "Vercel"],
    image: {
      LIGHT: "/images/projects/devi.webp",
      DARK: "/images/projects/devi.webp",
    },
  },
  {
    index: 1,
    title: "Kushal Yoga",
    href: "/projects",
    tags: ["Next.js", "Tailwindcss", "Vercel"],
    image: {
      LIGHT: "/images/projects/kushal.webp",
      DARK: "/images/projects/kushal.webp",
    },
  },
  {
    index: 2,
    title: "Admin Dashboards",
    href: "/projects",
    tags: ["Next.js", "Tailwindcss", "Vercel"],
    image: {
      LIGHT: "/images/projects/dash.png",
      DARK: "/images/projects/dash.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Devi Pickles",
    favicon: "/images/projects/logos/devifavicon.ico",
    imageUrl: [
      "/images/projects/devi1.png",
      "/images/projects/devi2.png",
      "/images/projects/devi3.png",
    ],
    description:
      "A full-stack food ordering platform with user authentication, secure payments, and automated order confirmation emails, built to deliver a seamless online purchasing experience.",
    sourceCodeHref: "https://github.com/hariPrasad0647/devipickles",
    liveWebsiteHref: "https://www.devipickles.com",
  },
  {
    name: "Kushal Yoga",
    favicon: "/images/projects/logos/k1.ico",
    imageUrl: ["/images/projects/k1.png", "/images/projects/k2.png"],
    description:
      "A full-stack webinar booking platform for online yoga masterclasses, featuring user registrations, secure payment integration, and automated confirmation workflows to streamline event bookings and payments.",

    liveWebsiteHref: "https://masterclass.kushalyoga.com",
  },
  {
    name: "Tutor Dashboard",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: ["/images/projects/s2.png", "/images/projects/s1.png"],
    description:
      "A coach booking platform that enables users to schedule sessions, complete secure payments, and receive automated booking confirmations, providing a smooth end-to-end appointment experience.",

    liveWebsiteHref: "https://www.sphoorthivedika.com/",
  },
  {
    name: "My portfolio",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/p11.png"],
    description:
      "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",

    liveWebsiteHref: siteMetadata.siteUrl,
  },
];
