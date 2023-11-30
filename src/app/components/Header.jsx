import Link from "next/link";
import MusikLogo from "./musiklogo";
import ProgramLogo from "./ProgramLogo";
import BilletLogo from "./BilletLogo";
export default function Header() {
  return (
    <header>
      <nav className="flex justify-center gap-6 sm:gap-10 md:gap-16 py-3 fixed w-full top-0 bg-[#13141D]">
        <Link
          className="grid place-items-center hover:scale-105"
          href="/kunstnere"
          prefetch={false}
        >
          <MusikLogo />
          Kunstnere
        </Link>
        <Link
          className="grid place-items-center hover:scale-105"
          href="/"
          prefetch={false}
        >
          <ProgramLogo />
          Program
        </Link>
        <Link
          className="grid place-items-center hover:scale-105"
          href="/"
          prefetch={false}
        >
          <BilletLogo />
          Køb Biletter
        </Link>
      </nav>
    </header>
  );
}
