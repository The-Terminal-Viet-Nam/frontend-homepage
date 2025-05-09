import { OpenGraph } from "@/lib/og";
import type { Metadata } from "next";
import { Layout, Navbar } from "nextra-theme-docs";
import "nextra-theme-docs/style.css";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";

const navbar = <Navbar logo={<b>Nextra</b>} />;
export const metadata: Metadata = {
  ...OpenGraph,
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
