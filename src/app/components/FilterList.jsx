"use client";
import FilterButton from "./FilterButton";

export default function FilterList({ data, setFilterProperty }) {
  const uniqueGenres = [...new Set(data.map((button) => button.genre))];
  uniqueGenres.unshift("Vis alle");

  // function onFilterClick(genre) {
  //   if (genre === "Vis alle") {
  //     setFilterProperty("");
  //   } else {
  //     setFilterProperty(genre);
  //     console.log(activeFilter);
  //   }
  // }
  return (
    <div className="flex snap-x overflow-x-auto  flex-nowrap  gap-3 py-4 mx-3 md:mx-12 lg:mx-44 mb-16 scrollbar-hide ">
      {uniqueGenres.map((genre, index) => (
        <FilterButton
          type="checkbox"
          setFilterProperty={setFilterProperty}
          key={index}
          filter={genre}
          text={genre}
          active={genre === "Vis alle" ? true : false}
        />
      ))}
    </div>
  );
}
