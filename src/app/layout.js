import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "@/app/providers";
import Navbar from "@/components/Navbar";
import Search from "@/components/Search";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Imdb Clone",
    description: "A clone of the IMDB website",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Providers>
            <Header/>
            <Navbar/>
            <Search/>
            {children}
        </Providers>
        </body>
        </html>
    );
}
