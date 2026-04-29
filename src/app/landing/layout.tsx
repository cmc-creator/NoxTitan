import type { Metadata } from "next";
import LandingThemeReset from "./LandingThemeReset";

export const metadata: Metadata = {
  title: "NyxTitan – Business Management. Forged for Titans.",
  description: "NyxTitan is the powerful, next-generation business management platform. Built for leaders, forged for titans. Unmatched scheduling, analytics, compliance, and team collaboration.",
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Reset any decorative themes that may have been set on other pages
  return (
    <>
      <LandingThemeReset />
      {children}
    </>
  );
}


