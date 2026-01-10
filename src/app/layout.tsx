import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-context";
import { AuthProvider } from "@/lib/auth-context";
import ConditionalTopNav from "@/components/ConditionalTopNav";
import Footer from "@/components/Footer";
import ConditionalBots from "@/components/ConditionalBots";

export const metadata: Metadata = {
  title: "NoxTitan – Business Management. Forged for Titans.",
  description: "NoxTitan is the powerful, next-generation business management platform. Built for leaders, forged for titans. Unmatched scheduling, analytics, compliance, and team collaboration. Compete with the giants. Dominate your industry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Roboto:wght@300;400;500;700&family=Poppins:wght@300;400;500;600;700;800&family=Montserrat:wght@300;400;500;600;700;800&family=Lato:wght@300;400;700&family=Open+Sans:wght@300;400;600;700&family=Raleway:wght@300;400;500;600;700;800&family=Nunito:wght@300;400;600;700;800&family=Source+Sans+3:wght@300;400;600;700&family=Playfair+Display:wght@400;500;600;700;800&family=Merriweather:wght@300;400;700&family=Ubuntu:wght@300;400;500;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased bg-gradient-to-b from-black via-purple-950 to-black text-purple-100">
        <AuthProvider>
          <ThemeProvider>
            <div className="flex flex-col min-h-screen">
              <ConditionalTopNav />
              <main className="flex-1 bg-gradient-to-b from-black/50 via-purple-950/30 to-black/50">
                {children}
              </main>
              <Footer />
            </div>
            <ConditionalBots />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
