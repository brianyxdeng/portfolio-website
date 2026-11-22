import type { Metadata } from "next";

import "../styles/globals.css";
import { instrumentSans } from "@/utils/fonts";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export const metadata: Metadata = {
    title: "Brian Deng",
    authors: [
        {
            name: "Brian Deng",
        }
    ],
    description: "Full Stack Developer. Location: Vancouver, British Columbia",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${instrumentSans.className} antialiased`} suppressHydrationWarning>
                <noscript>
                    <style>{`
                        canvas { display: none !important; }
                        .home { box-shadow: none !important; }
                        .background-toggle { display: none !important; }
                    `}</style>
                </noscript>
                {children}
            </body>
        </html>
    );
}
