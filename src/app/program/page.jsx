"use client";
import FilterButton from "../components/FilterButton";
import ScheduleList from "../components/ScheduleList";

import { useEffect, useState } from "react";

export default function Program() {
  const [program, setProgram] = useState({});
  const [filterProperty, setFilterproperty] = useState("mon");

  useEffect(() => {
    fetch("https://fe-fi-foofest.glitch.me/schedule")
      .then((res) => res.json())
      .then((data) => {
        setProgram(data);
      });
  }, []);

  return (
    <main >
      <h1 className=" font-heading text-5xl sm:text-7xl text-secondary mx-3 md:mx-12 lg:mx-40 mb-16 mt-28">
        Program
      </h1>
      <div className="flex snap-x overflow-x-auto  flex-nowrap scrollbar-hide  gap-3 py-4 mx-3 md:mx-12 lg:mx-44 mb-16">
        <FilterButton
          program={program}
          text="Mandag"
          type="radio"
          filter="mon"
          setFilterProperty={setFilterproperty}
        />
        <FilterButton
          program={program}
          type="radio"
          text="Tirsdag"
          filter="tue"
          setFilterProperty={setFilterproperty}
        />
        <FilterButton
          program={program}
          type="radio"
          text="Onsdag"
          filter="wed"
          setFilterProperty={setFilterproperty}
        />
        <FilterButton
          program={program}
          type="radio"
          text="Torsdag"
          filter="thu"
          setFilterProperty={setFilterproperty}
        />
        <FilterButton
          program={program}
          type="radio"
          text="Fredag"
          filter="fri"
          setFilterProperty={setFilterproperty}
        />
        <FilterButton
          program={program}
          type="radio"
          text="Lørdag"
          filter="sat"
          setFilterProperty={setFilterproperty}
        />
        <FilterButton
          program={program}
          type="radio"
          text="Søndag"
          filter="sun"
          setFilterProperty={setFilterproperty}
        />
      </div>

      <div className="grid lg:grid-cols-3 mx-3 md:mx-12  lg:mx-28  mb-16">
        <h2 className="text-3xl order-none text-center mx-auto lg:mx-0 mb-8 pb-8 w-10/12 sm:w-8/12 lg:w-full  border-b-2 border-accent">
          Midgard
        </h2>
        <h2 className="text-3xl order-2 lg:order-none text-center mx-auto lg:mx-0 mb-8 pb-8 w-10/12 sm:w-8/12 lg:w-full border-b-2 border-accent">
          Vanaheim
        </h2>
        <h2 className="text-3xl order-4 lg:order-none text-center mx-auto lg:mx-0 mb-8 pb-8 w-10/12 sm:w-8/12 lg:w-full border-b-2 border-accent">
          Jutunheim
        </h2>

        {program.Midgard && (
          <ScheduleList
            program={program.Midgard}
            filterProperty={filterProperty}
          />
        )}
        {program.Vanaheim && (
          <ScheduleList
            className="order-3"
            program={program.Vanaheim}
            stage="vanaheim"
            filterProperty={filterProperty}
          />
        )}
        {program.Jotunheim && (
          <ScheduleList
            className="order-5"
            program={program.Jotunheim}
            filterProperty={filterProperty}
          />
        )}
      </div>
    </main>
  );
}
