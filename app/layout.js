import "./globals.css";

export const metadata = {
  title: "Cumulus - Solutions at the speed of production",
  description: "Cumulus provides innovative solutions at the speed of production. Expert consulting and development services for modern businesses.",
  keywords: "Cumulus, software solutions, production, development, consulting",
  openGraph: {
    title: "Cumulus - Solutions at the speed of production",
    description: "Cumulus provides innovative solutions at the speed of production",
    type: "website",
    locale: "en_US",
    url: "https://cumuluscontent.com",
    siteName: "Cumulus",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cumulus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cumulus - Solutions at the speed of production",
    description: "Cumulus provides innovative solutions at the speed of production",
    images: ["/images/og-image.jpg"],
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
  icons: {
    icon: '/images/c_stack.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://cumuluscontent.com" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
