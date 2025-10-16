import "./css/style.css";

import { Inter } from "next/font/google";
import ClarityProvider from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Servelink - Push code, deploy apps, scale effortlessly",
    template: "%s | Servelink"
  },
  description: "Deploy your Laravel, Python, Node.js and other fullstack applications with Servelink. The modern deployment platform for developers with integrated CI/CD, database management, and real-time monitoring.",
  keywords: ["deployment", "fullstack", "laravel", "python", "nodejs", "react", "django", "flask", "ci/cd", "devops"],
  authors: [{ name: "Servelink Team" }],
  creator: "Servelink",
  publisher: "Servelink",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://servel.ink"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://servel.ink",
    title: "Servelink - Push code, deploy apps, scale effortlessly",
    description: "Deploy your Laravel, Python, Node.js and other fullstack applications with Servelink. The modern deployment platform for developers.",
    siteName: "Servelink",
  },
  twitter: {
    card: "summary_large_image",
    title: "Servelink - Push code, deploy apps, scale effortlessly",
    description: "Deploy your Laravel, Python, Node.js and other fullstack applications with Servelink. The modern deployment platform for developers.",
    creator: "@servelink",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <ClarityProvider>
            {children}
          </ClarityProvider>
        </div>
      </body>
    </html>
  );
}
