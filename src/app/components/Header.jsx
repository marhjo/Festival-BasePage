import Link from "next/link";
import MusikLogo from "./musiklogo";
import ProgramLogo from "./ProgramLogo";
import BilletLogo from "./BilletLogo";
import LogoMobile from "./LogoMobile";
import LogoDesktop from "./LogoDesktop";
export default function Header() {
  return (
    <header>
      <nav className="flex justify-between align-middle px-3 sm:gap-10 md:gap-16 py-3 fixed w-full top-0 bg-dark-blue z-50 text-secondary-text">
        <div>
          <Link
            className="hover:scale-105 duration-150 sm:hidden"
            href="/"
            prefetch={false}
          >
            <LogoMobile />
          </Link>
          <Link
            className="hidden hover:scale-105 duration-150 sm:block"
            href="/"
            prefetch={false}
          >
            <LogoDesktop />
          </Link>
        </div>
        <div className="flex gap-5 sm:gap-11">
          <Link
            className="grid place-items-center hover:scale-105 duration-150"
            href="/artists"
            prefetch={false}
          >
            <MusikLogo />
            Artists
          </Link>
          <Link
            className="grid place-items-center hover:scale-105 duration-150"
            href="/program"
            prefetch={false}
          >
            <ProgramLogo />
            Program
          </Link>
          <Link
            className="grid place-items-center hover:scale-105 duration-150"
            href="https://milk-foofest-tickets.vercel.app/"
            prefetch={false}
          >
            <BilletLogo />
            Buy Tickets
          </Link>
        </div>
        <div className="hidden sm:block w-20"></div>
      </nav>
    </header>
  );
}
