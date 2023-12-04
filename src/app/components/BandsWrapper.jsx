"use client";
import FilterList from "./FilterList";
import ArtistList from "./ArtistList";
import { useState } from "react";
export default function BandsWrapper({ data }) {
  const [filterProperty, setFilterProperty] = useState("");
  let filtered = data;
  if (filterProperty) {
    filtered = data.filter((band) => band.genre === filterProperty);
  }

  return (
    <>
      <FilterList
        setFilterProperty={setFilterProperty}
        data={data}
      ></FilterList>

      <ArtistList filtered={filtered} data={data} />
    </>
  );
}
