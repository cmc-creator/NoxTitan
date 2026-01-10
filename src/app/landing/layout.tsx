import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NoxTitan – Business Management. Forged for Titans.",
  description: "NoxTitan is the powerful, next-generation business management platform. Built for leaders, forged for titans. Unmatched scheduling, analytics, compliance, and team collaboration.",
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Just return children without any wrapper - no TopNavigation for landing page
  return <>{children}</>;
}
