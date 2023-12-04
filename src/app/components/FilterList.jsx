"use client";
import FilterButton from "./FilterButton";

export default function FilterList({ data, setFilterProperty }) {
  const uniqueGenres = [...new Set(data.map((button) => button.genre))];
  uniqueGenres.unshift("Vis alle");

  return (
    <div className="flex flex-wrap gap-3 py-4 mx-3 md:mx-12 lg:mx-44 mb-16">
      {uniqueGenres.map((genre, index) => (
        <FilterButton
          onClick={() =>
            genre === "Vis alle"
              ? setFilterProperty("")
              : setFilterProperty(genre)
          }
          key={index}
          data={genre}
          variant="secondary"
        />
      ))}
    </div>
  );
}
