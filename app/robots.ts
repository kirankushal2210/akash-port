import type { MetadataRoute } from "next";
import { NAME_IS_PLACEHOLDER, SITE_URL } from "@/content/profile";

export default function robots(): MetadataRoute.Robots {
  // Stay out of search results until the placeholder name is replaced.
  if (NAME_IS_PLACEHOLDER) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
