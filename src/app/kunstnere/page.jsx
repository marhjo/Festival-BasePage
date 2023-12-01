import ArtistList from "../components/ArtistList";
import FilterList from "../components/FilterList";
import FilterButton from "../components/FilterButton";
export default function Kunstnere() {
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
      <FilterList>
        <FilterButton variant="secondary" text="Vis alle" />
        <FilterButton variant="secondary" text="Rock" />
        <FilterButton variant="secondary" text="Hypertrash" />
      </FilterList>

      <ArtistList />
    </main>
  );
}
