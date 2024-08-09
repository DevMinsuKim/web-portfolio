import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.kmscv.dev",
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 1,
    },
  ];
}
