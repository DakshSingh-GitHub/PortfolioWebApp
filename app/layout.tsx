import type { Metadata } from "next";
import { Geist, Geist_Mono, Oxanium } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/global/Navbar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const oxanium = Oxanium({
    subsets: ["latin"],
    variable: "--font-oxanium",
})

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Meet Daksh Singh",
    description: "Portfolio Website that has been made by me, Daksh Singh, to showcase my profile",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={` ${oxanium.variable} ${geistSans.variable} ${geistMono.variable} antialiased pt-28`} >
                <Navbar />
                {children}
            </body>
        </html>
    );
}
