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
    name: "My portfolio",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/p11.png"],
    description:
      "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",

    liveWebsiteHref: siteMetadata.siteUrl,
  },
];
