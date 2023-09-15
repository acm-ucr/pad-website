/* eslint-disable new-cap */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line camelcase
import { Playfair_Display, Source_Serif_4 } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
const source = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source",
});

export const metadata = {
  title: "Phi Alpha Delta at UCR",
  description: "UCR Phi Alpha Delta official website creatd by ACM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${source.variable}`}>
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="./favicon.ico" />
      </head>
      <body className="bg-pad-beige flex items-center justify-center flex-col">
        <Navigation />
        <div className="w-full flex flex-col min-h-screen overflow-hidden items-center justify-center mb-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
