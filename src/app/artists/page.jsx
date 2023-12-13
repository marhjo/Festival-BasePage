import BandsWrapper from "../components/BandsWrapper";

export const metadata = {
  title: "Artists",
  description:
    "Explore the exciting lineup for Foofest 2024, featuring top names and emerging talents. Discover the ultimate list of bands that will set the party in motion.",
};

export default async function Kunstnere() {
  const res = await fetch("https://fe-fi-foofest.glitch.me/bands");
  const data = await res.json();

  return (
    <main>
      <h1 className=" font-heading text-5xl sm:text-7xl text-secondary mx-3 md:mx-12 lg:mx-32 mb-2 mt-28">
        Artists
      </h1>
      <p className="text-xl text-secondary max-w-prose mx-3 md:mx-12 lg:mx-32 mb-8">
        We have compiled our entire lineup below for you to explore before the
        party kicks off. Easily filter by your preferred genre, and if you spot
        an artist or band that piques your interest, simply click on them to
        learn more.
      </p>
      <BandsWrapper data={data} />
    </main>
  );
}
