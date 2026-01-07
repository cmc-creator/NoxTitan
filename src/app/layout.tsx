import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-context";
import { AuthProvider } from "@/lib/auth-context";
import TopNavigation from "@/components/TopNavigation";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import VoiceAIAssistant from "@/components/VoiceAIAssistant";

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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto:wght@400;500;700&family=Open+Sans:wght@400;600;700&family=Lato:wght@400;700&family=Montserrat:wght@400;600;700&family=Poppins:wght@400;600;700&family=Source+Sans+Pro:wght@400;600;700&family=Raleway:wght@400;600;700&family=Ubuntu:wght@400;500;700&family=Nunito:wght@400;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased bg-gradient-to-b from-black via-purple-950 to-black text-purple-100">
        <AuthProvider>
          <ThemeProvider>
            <div className="flex flex-col min-h-screen">
              <TopNavigation />
              <main className="flex-1 bg-gradient-to-b from-black/50 via-purple-950/30 to-black/50">
                {children}
              </main>
              <Footer />
            </div>
            <ChatBot />
            <VoiceAIAssistant context="dashboard" userRole="hr" />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
