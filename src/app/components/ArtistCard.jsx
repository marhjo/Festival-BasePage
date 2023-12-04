import Image from "next/image";
import Link from "next/link";
export default function ArtistCard({ data }) {
  // props: {logo, name, genre}
  return (
    <Link
      href={`/kunstnere/${data.slug}`}
      prefetch={false}
      className="@container relative aspect-square overflow-hidden rounded-md"
    >
      {/* <Image
        src={
          data.logo.startsWith("https") ? data.logo : ""
          // : `http://localhost:8080/${data.logo}`
        }
        width="720"
        height="480"
        className="h-full w-full object-cover brightness-[.65]"
        sizes="480px"
        alt={data.name}
      /> */}
      <img
        className="h-full w-full object-cover brightness-[.65]"
        src={
          data.logo.startsWith("https")
            ? data.logo
            : `http://localhost:8080/logo/${data.logo}`
        }
        alt={data.name}
      />
      <div className="absolute bottom-0 px-3 py-8 w-full">
        <h2 className=" @[15rem]:text-2xl text-lg text-[#F0DCD7]">
          {data.name}
        </h2>
        <p className="@[15rem]:text-lg text-sm text-[#F0DCD7]">{data.genre}</p>
      </div>
    </Link>
  );
}
