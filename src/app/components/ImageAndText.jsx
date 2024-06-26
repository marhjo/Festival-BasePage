import Image from "next/image";
import Link from "next/link";
export default function ImageAndText(props) {
  const isReversed = props.layout === "reversed";
  return (
    <article
      className={`py-10 md:flex ${
        isReversed ? "flex-row-reverse" : ""
      } justify-center items-center sm:gap-7 md:px-16`}
    >
      <Image
        className="w-full md:max-w-screen-sm  object-cover aspect-[5/3]"
        src={"/" + props.image}
        alt={props.image}
        width={1920}
        height={1080}
        sizes="(max-width: 600px) 100vw, 600px"
      />
      <div className="py-5 md:py-0 px-5">
        <h2 className="mb-3 text-4xl md:text-5xl font-semibold">
          {props.overskrift}
        </h2>
        <p className="mb-5 md:text-lg max-w-prose">{props.text}</p>
        <Link
          className="underline cursor-pointer md:text-lg"
          href={"/" + props.link}
          prefetch={false}
        >
          {props.linktekst}
        </Link>
      </div>
    </article>
  );
}
