import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/assets/styles/globals.css";
import {APP_NAME} from "@/lib/constants"
import { ThemeProvider } from "next-themes";


const inter = Inter({
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: `${APP_NAME}`,
  description: "Build with NextJs Primsa Typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning = {true}>
      <body
        className={`${inter.className}  antialiased`}
      >
      <ThemeProvider attribute='class' defaultTheme="dark" enableSystem disableTransitionOnChange>
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
