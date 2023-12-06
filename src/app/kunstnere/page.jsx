import BandsWrapper from "../components/BandsWrapper";

export const metadata = {
  title: "Kunstnere",
  description:
    "Udforsk det spændende lineup til Foofest 2024. Fra topnavne til nye talenter. Find den ultimative liste over bands, der vil sætte gang i festen",
};

export default async function Kunstnere() {
  const res = await fetch("http://localhost:8080/bands");
  const data = await res.json();

  // props: {logo name genre}
  return (
    <main className="bg-[#1E1F2E]">
      <h1 className="text-5xl sm:text-7xl text-secondary mx-3 md:mx-12 lg:mx-44 mb-2 mt-28">
        Kunstnere
      </h1>
      <p className="text-xl text-secondary max-w-prose mx-3 md:mx-12 lg:mx-44 mb-8">
        Mellem lang tekst som beskriver det brede udvalg af kunstnere og som
        skal ligge op til at læseren selv kan udforske udvalget af kategorier.
      </p>
      <BandsWrapper data={data} />
    </main>
  );
}
