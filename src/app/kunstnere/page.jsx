import BandsWrapper from "../components/BandsWrapper";

export const metadata = {
  title: "Kunstnere",
  description: "Udforsk det spændende lineup til Foofest 2024. Fra topnavne til nye talenter. Find den ultimative liste over bands, der vil sætte gang i festen",
};

export default async function Kunstnere() {
  const res = await fetch("https://fe-fi-foofest.glitch.me/bands");
  const data = await res.json();

  // props: {logo name genre}
  return (
    <main>
      <h1 className=" font-heading text-5xl sm:text-7xl text-secondary mx-3 md:mx-12 lg:mx-44 mb-2 mt-28">Kunstnere</h1>
      <p className="text-xl text-secondary max-w-prose mx-3 md:mx-12 lg:mx-44 mb-8">
        Vi har samlet hele vores line-up nedenunder som du kan udforske inden festen for alvor går igang. Du kan nemt filtrere efter hvilke genre du kan lide, og ser du en kunstner eller band du finder interesant, så kan du bare trykke på dem for at
        læse mere.
      </p>
      <BandsWrapper data={data} />
    </main>
  );
}
