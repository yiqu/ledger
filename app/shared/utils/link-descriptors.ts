import type { LinkDescriptor } from "@remix-run/node";

export const gSansRegular: LinkDescriptor = {
  rel: "preload",
  href: "/assets/fonts/GoogleSans/GoogleSans-Regular.ttf",
  as: "font",
  type: "font/woff2",
  crossOrigin: "anonymous",
};