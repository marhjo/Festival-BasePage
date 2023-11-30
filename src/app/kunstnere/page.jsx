import ArtistList from "../components/ArtistList";
import FilterList from "../components/FilterList";
export default function Kunstnere() {
  // props: {logo name genre}
  return (
    <main className="bg-[#1E1F2E]">
      <h1 className="text-7xl text-secondary lg:mx-44 mb-2 mt-28">Kunstnere</h1>
      <p className="text-xl text-secondary max-w-prose lg:mx-44 mb-8">
        Mellem lang tekst som beskriver det brede udvalg af kunstnere og som
        skal ligge op til at læseren selv kan udforske udvalget af kategorier.
      </p>
      <FilterList />

      <ArtistList />
    </main>
  );
}
