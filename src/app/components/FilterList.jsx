"use client";
import FilterButton from "./FilterButton";

export default function FilterList({
  data,
  setFilterProperty,
  filterProperty,
}) {
  const uniqueGenres = [...new Set(data.map((button) => button.genre))];
  uniqueGenres.unshift("Vis alle");

  return (
    <div className="flex snap-x overflow-x-auto  flex-nowrap  gap-3 py-4 mx-3 md:mx-12 lg:mx-32 mb-16 ">
      {uniqueGenres.map((genre, index) => (
        <FilterButton
          type="checkbox"
          setFilterProperty={setFilterProperty}
          filterProperty={filterProperty}
          key={index}
          filter={genre}
          isChecked={filterProperty.includes(genre)}
        />
      ))}
    </div>
  );
}
