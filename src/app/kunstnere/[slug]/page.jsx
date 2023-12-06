import Image from "next/image";
import Link from "next/link";
import CalenderLogo from "../../components/CalenderLogo";
import LocationLogo from "../../components/LocationLogo";

export async function generateStaticParams() {
  const res = await fetch("http://localhost:8080/bands");
  const pages = await res.json();

  const paths = pages.map((page) => {
    return { slug: page.slug };
  });
  return paths;
}

export default async function Kunstner({ params }) {
  const { slug } = params;
  const res = await fetch(`http://localhost:8080/bands/${slug}`);
  const data = await res.json();

  // const response = await fetch(`http://localhost:8080/schedule`);
  // const schedule = await response.json();

  return (
    <main className="pt-[72px]">
      <Link className="underline px-3" href="/kunstnere" prefetch={false}>
        Tilbage til kunstnere
      </Link>

      <div className="bandsection md:flex md:justify-center md:px-10 mx-auto py-5 md:py-10">
        <img
          className="aspect-square object-cover w-full md:w-4/12"
          src={
            data.logo.startsWith("https")
              ? data.logo
              : `http://localhost:8080/logos/${data.logo}`
          }
          alt={data.name}
        />

        <div className="bandinfo px-5 pt-3 md:pt-0 pb-5">
          <h1 className="text-3xl font-bold">{data.name}</h1>
          <h2 className="text-xl font-semibold mb-5">{data.genre}</h2>
          <div className="flex gap-10 mb-6">
            <p className="flex gap-2">
              <span>
                <CalenderLogo />
              </span>
              16 januar 14-16
            </p>
            <p className="flex gap-2">
              <span>
                <LocationLogo />
              </span>
              Midgard
            </p>
          </div>
          <div className="bandmedlemmer flex flex-wrap gap-x-10 mb-10">
            {data.members.map((member) => (
              <p key={data.name}>{member}</p>
            ))}
          </div>
          <p className="font-thin max-w-prose">{data.bio}</p>
        </div>
      </div>
    </main>
  );
}
