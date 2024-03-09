import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { vercelPreset } from "@vercel/remix/vite";
import { visualizer } from "rollup-plugin-visualizer";

installGlobals();

export default defineConfig({
  plugins: [
    remix(
      {
        presets: [vercelPreset()],
        ignoredRouteFiles: ["**/.*"],
        // serverModuleFormat: "cjs",
        future: {
          v3_fetcherPersist: true,
          v3_relativeSplatPath: true
        }
      }
    ),
    tsconfigPaths(),
    visualizer({ emitFile: true }),
  ],
  server: {
    port: 3000,
    fs: {
      // Restrict files that could be served by Vite's dev server.  Accessing
      // files outside this directory list that aren't imported from an allowed
      // file will result in a 403.  Both directories and files can be provided.
      // If you're comfortable with Vite's dev server making any file within the
      // project root available, you can remove this option.  See more:
      // https://vitejs.dev/config/server-options.html#server-fs-allow
      allow: ["app"],
    },
  },
  ssr: {
    noExternal: [
      /^remix-utils.*/,
      // If you installed is-ip optional dependency you will need these too
      "is-ip",
      "ip-regex",
      "super-regex",
      "clone-regexp",
      "function-timeout",
      "time-span",
      "convert-hrtime",
      "is-regexp",
    ],
  },
});
