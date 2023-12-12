import Image from "next/image";
import Link from "next/link";
export default function ArtistCard({ data }) {
  // props: {logo, name, genre}
  return (
    <Link
      href={`/kunstnere/${data.slug}`}
      prefetch={false}
      className="@container relative aspect-square overflow-hidden rounded-md hover:brightness-150"
    >
      <Image
        src={
          data.logo.startsWith("https")
            ? data.logo
            : `https://fe-fi-foofest.glitch.me/logos/${data.logo}`
        }
        width="200"
        height="100"
        className="h-full w-full object-cover brightness-[.65]"
        alt={data.name}
      />

      {/* <img
        className="h-full w-full object-cover brightness-[.65] "
        src={
          data.logo.startsWith("https")
            ? data.logo
            : `http://localhost:8080/logos/${data.logo}`
        }
        alt={data.name}
      /> */}

      <div className="absolute bottom-0 px-3 py-8 w-full">
        <h2 className=" @[15rem]:text-2xl font-bold text-lg">{data.name}</h2>
        <p className="@[15rem]:text-lg text-sm ">{data.genre}</p>
      </div>
    </Link>
  );
}
