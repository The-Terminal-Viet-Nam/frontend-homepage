import withSerwistInit from "@serwist/next";
import nextra from "nextra";

const withNextra = nextra({
  contentDirBasePath: "/docs",
  search: { codeblocks: true },
  defaultShowCopyCode: true,
});

const withSerwist = withSerwistInit({
  // Note: This is only an example. If you use Pages Router,
  // use something else that works, such as "service-worker/index.ts".
  swSrc: "src/lib/sw.ts",
  swDest: "public/sw.js",
  disable: process.env.NODE_ENV === "development",
});


export default withNextra(
  withSerwist({
    reactStrictMode: true,
    output: "standalone",
    experimental: {
      useCache: true,
    },
    turbopack: {
      resolveAlias: {
        "next-mdx-import-source-file": "./src/mdx-components.tsx",
      },
    },
    eslint: {
      dirs: ["src"],
    }
  }),
);
