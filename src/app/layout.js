
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import localFont from "next/font/local";

const sans = localFont({ src: './fonts/CabinetGrotesk-variable.ttf', variable: '--font-sans' })
const heading = localFont({ src: './fonts/Sentient-Variable.ttf', variable: '--font-heading' })

export const metadata = {
  title: "Program",
  description:
    "Find alle detaljer om Foofest 2024-programmet. Oplev storslåede optrædener og musikalske højdepunkter ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-sans ${sans.variable} ${heading.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
