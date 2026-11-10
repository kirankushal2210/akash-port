import type { MetadataRoute } from "next";
import { NAME, metaDescription } from "@/content/profile";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${NAME} — Portfolio`,
    short_name: NAME,
    description: metaDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#f3ba16",
    theme_color: "#172554",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}

