import Header from "@/app/header";
import { cn } from "@/lib/utils";
import { Figtree } from "next/font/google";

import "./globals.css";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={cn("flex flex-col h-full antialiased", "font-sans", figtree.variable)}>
      <body className="flex flex-col flex-1 bg-background text-foreground">
        <Header />

        <div className="flex flex-col flex-1">{children}</div>
      </body>
    </html>
  );
}
