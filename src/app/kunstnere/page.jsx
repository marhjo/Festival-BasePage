import BandsWrapper from "../components/BandsWrapper";

export const metadata = {
  title: "Kunstnere",
  description:
    "Explore the exciting lineup for Foo Festival 2024. From big artists to new talents. Discover the ultimate list of bands that will ignite the party.",
};

export default async function Kunstnere() {
  const res = await fetch("https://fe-fi-foofest.glitch.me/bands");
  const data = await res.json();

  // props: {logo name genre}
  return (
    <main>
      <h1 className=" font-heading text-5xl sm:text-7xl text-secondary mx-3 md:mx-12 lg:mx-32 mb-2 mt-28">
        Kunstnere
      </h1>
      <p className="text-xl text-secondary max-w-prose mx-3 md:mx-12 lg:mx-32 mb-8">
        Vi har samlet hele vores line-up nedenunder som du kan udforske inden
        festen for alvor går igang. Du kan nemt filtrere efter hvilke genre du
        kan lide, og ser du en kunstner eller band du finder interesant, så kan
        du bare trykke på dem for at læse mere.
      </p>
      <BandsWrapper data={data} />
    </main>
  );
}
