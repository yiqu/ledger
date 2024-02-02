import type { LinkDescriptor } from "@remix-run/node";

export const gSansRegular: LinkDescriptor = {
  rel: "preload",
  href: "/assets/fonts/GoogleSans/GoogleSans-Regular.ttf",
  as: "font",
  type: "font/woff2",
  crossOrigin: "anonymous",
};

export const gSansTextRegular: LinkDescriptor = {
  rel: "preload",
  href: "/assets/fonts/GoogleSansText/GoogleSansText-Regular.ttf",
  as: "font",
  type: "font/woff2",
  crossOrigin: "anonymous",
};

export const gSansDisplayRegular: LinkDescriptor = {
  rel: "preload",
  href: "/assets/fonts/GoogleSansDisplay/GoogleSansDisplay-Regular.ttf",
  as: "font",
  type: "font/woff2",
  crossOrigin: "anonymous",
};