import "./global.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import localFont from "next/font/local";

const sans = localFont({
  src: "./fonts/CabinetGrotesk-Variable.ttf",
  variable: "--font-sans",
});
const heading = localFont({
  src: "./fonts/Sentient-Variable.ttf",
  variable: "--font-heading",
});

export const metadata = {
  title: "Program",
  description:
    "Find all the details about the program for Foo Festival 2024. Experience exciting performances and musical highlights ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${sans.variable} ${heading.variable} bg-background text-primary-text scroll-smooth`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
