import {Inter} from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Nav from "@/components/Nav/Nav";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Dora Do - Creative Technologist",
    description: "Dora Do is a creative technologist based in New York City. She is passionate about creating interactive experiences that are both engaging and accessible.",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className="border">
        <main className={styles.main}>
                <Header/>
                {children}
            </main>
        </div>
        </body>
        </html>
    );
}
