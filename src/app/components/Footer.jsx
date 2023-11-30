import Link from "next/link";
import FacebookLogo from "./FacebookLogo";
import InstagramLogo from "./InstagramLogo";
export default function Footer() {
  return (
    <footer className="bg-[#13141D] px-4 py-3 pb-10 flex flex-col gap-10 sm:flex-row sm:justify-center sm:gap-20">
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-[#EAAC86]">Foo Festival</h2>
        <nav className="flex flex-col">
          <Link href="/" prefetch={false}>
            Om os
          </Link>
          <Link href="/" prefetch={false}>
            Samarbejdspartnere
          </Link>
          <Link href="/" prefetch={false}>
            Bliv frivillig
          </Link>
        </nav>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-[#EAAC86]">Kontakt os</h2>
        <div>
            <p>Tel: 43 23 65 45</p>
            <p className="mb-4">Mail: kontakt@foofestival.dk</p>
            <p>Metallicavej 17</p>
            <p>2700 Brønshøj</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 order-first sm:order-3">
        <h2 className="font-bold text-[#EAAC86] hidden sm:block">Følg os</h2>
        <div className="flex gap-5 justify-center">
            <FacebookLogo/>
            <InstagramLogo/>
        </div>
      </div>
    </footer>
  );
}