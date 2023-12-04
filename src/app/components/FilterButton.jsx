"use client";
import { useState } from "react";
export default function FilterButton({ genre, active, setFilterProperty }) {
  const [activeFilter, setActiveFilter] = useState(false);

  function onFilterClick(genre) {
    setActiveFilter((old) => !old);
    if (genre === "Vis alle") {
      setFilterProperty("");
    } else {
      setFilterProperty(genre);
      console.log(activeFilter);
    }
  }
  return (
    <button
      onClick={() => onFilterClick(genre)}
      className={`${
        (activeFilter && "bg-primary text-primary") ||
        (active && "bg-primary text-primary")
      } 
       hover:bg-primary hover:text-primary border-[#CDD6F4] border-2 px-8 rounded-2xl py-px`}
    >
      {genre}
    </button>
  );
}
