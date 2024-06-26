"use client";
import FilterList from "./FilterList";
import ArtistList from "./ArtistList";
import { useState } from "react";
export default function BandsWrapper({ data }) {
  const [filterProperty, setFilterProperty] = useState(["Show all"]);
  let filtered = data;
  if (filterProperty.includes("Show all")) {
    filtered = data;
  } else {
    filtered = data.filter((band) => filterProperty.includes(band.genre));
  }

  return (
    <>
      <FilterList
        setFilterProperty={setFilterProperty}
        data={data}
        filterProperty={filterProperty}
      ></FilterList>

      <ArtistList filtered={filtered} data={data} />
    </>
  );
}
