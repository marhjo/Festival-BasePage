"use client";
import { useState } from "react";
export default function FilterButton({
  filter,
  text,
  active,
  setFilterProperty,
}) {
  // const [activeFilter, setActiveFilter] = useState(false);

  function onFilterClick(filter) {
    // setActiveFilter((old) => !old);
    if (filter === "Vis alle") {
      setFilterProperty("");
    } else {
      setFilterProperty(filter);
    }
  }
  return (
    <button
      onClick={() => onFilterClick(filter)}
      className={`${
        // (activeFilter && "bg-primary text-primary") ||
        active && "bg-primary text-primary"
      } focus:bg-primary focus:text-primary
       hover:bg-primary hover:text-primary border-[#CDD6F4] border-2 px-8 rounded-2xl py-px`}
    >
      {text}
    </button>
  );
}
