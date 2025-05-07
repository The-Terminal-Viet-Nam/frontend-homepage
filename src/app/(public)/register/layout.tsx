import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
  description: "Register to The Terminal",
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
