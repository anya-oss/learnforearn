import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LearnForEarn - Master Dropshipping",
  description: "Learn the exact strategies to build a profitable dropshipping empire",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "LearnForEarn - Master Dropshipping",
    description: "Learn the exact strategies to build a profitable dropshipping empire",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "LearnForEarn Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "LearnForEarn - Master Dropshipping",
    description: "Learn the exact strategies to build a profitable dropshipping empire",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden" suppressHydrationWarning>{children}</body>
    </html>
  );
}

