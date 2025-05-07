import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { OpenGraph } from "@/lib/og";
import { fetchUser } from "@/lib/queries/me";
import { TanstackQueryProvider } from "@/providers/query-provider";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  ...OpenGraph,
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["me"],
    queryFn: fetchUser,
    retry: 5,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <TanstackQueryProvider>
          <HydrationBoundary state={dehydratedState}>
            {children}
          </HydrationBoundary>
          <Analytics />
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
