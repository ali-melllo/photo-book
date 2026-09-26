import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "مهرورو | کتاب‌های عکس شخصی",
    short_name: "مهرورو",
    description: "خاطرات، همیشه با تو.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF8F5",
    theme_color: "#7C5CFC",
    lang: "fa",
    dir: "rtl",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
