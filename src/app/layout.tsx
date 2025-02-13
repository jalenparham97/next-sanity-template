import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PreviewProvider } from "@/components/preview/preview-provider";
import { env } from "@/env";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { draftMode } from "next/headers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Acme Inc.",
  description: "Helping companies build better products",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const preview = (await draftMode()).isEnabled
    ? { token: env.SANITY_API_READ_TOKEN }
    : undefined;

  const isPreview = preview !== undefined;

  const layout = (
    <>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>
          <div className="fixed left-0 top-0 -z-10 h-full w-full">
            <div className="absolute inset-0 -z-10 h-screen w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
          </div>
          <Header isPreview={isPreview} />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );

  if (preview) {
    return <PreviewProvider token={preview.token}>{layout}</PreviewProvider>;
  }

  return layout;
}
