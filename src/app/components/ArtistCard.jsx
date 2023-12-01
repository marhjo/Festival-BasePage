import Image from "next/image";
import Link from "next/link";
export default function ArtistCard() {
  // props: {logo, name, genre}
  return (
    <Link
      href="/kunstnere"
      prefetch={false}
      className="@container relative aspect-square overflow-hidden rounded-md"
    >
      <Image
        src="https://images.unsplash.com/photo-1433162653888-a571db5ccccf?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8cmFuZG9tfHx8fHx8MTcwMTMzODQ3Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=720"
        width="720"
        height="480"
        className="h-full w-full object-cover brightness-[.65]"
        sizes="480px"
        alt="Band name"
      />
      <div className="absolute bottom-0 px-3 py-8 w-full">
        <h2 className=" @[15rem]:text-2xl text-lg text-[#F0DCD7]">
          Zboncak - Haag
        </h2>
        <p className="@[15rem]:text-lg text-sm text-[#F0DCD7]">Folk</p>
      </div>
    </Link>
  );
}
