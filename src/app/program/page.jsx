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
    <main>
      <h1 className=" font-heading text-5xl sm:text-7xl text-secondary mx-3 md:mx-12 lg:mx-32 mb-2 mt-28">
        Program
      </h1>
      <p className="text-xl text-secondary max-w-prose mx-3 md:mx-12 lg:mx-32 mb-8">
        Below, you will find the complete schedule distributed across our three
        stages. You can filter based on the days you would like to attend concerts.
        Please note that the schedule may be subject to changes.
      </p>
      <div className="flex snap-x overflow-x-auto  flex-nowrap  gap-3 py-4 mx-3 md:mx-12 lg:mx-32 mb-16">
        <FilterButton
          program={program}
          text="Monday"
          type="radio"
          filter="mon"
          setFilterProperty={setFilterproperty}
        />
        <FilterButton
          program={program}
          type="radio"
          text="Tuesday"
          filter="tue"
          setFilterProperty={setFilterproperty}
        />
        <FilterButton
          program={program}
          type="radio"
          text="Wednesday"
          filter="wed"
          setFilterProperty={setFilterproperty}
        />
        <FilterButton
          program={program}
          type="radio"
          text="Thursday"
          filter="thu"
          setFilterProperty={setFilterproperty}
        />
        <FilterButton
          program={program}
          type="radio"
          text="Friday"
          filter="fri"
          setFilterProperty={setFilterproperty}
        />
        <FilterButton
          program={program}
          type="radio"
          text="Saturday"
          filter="sat"
          setFilterProperty={setFilterproperty}
        />
        <FilterButton
          program={program}
          type="radio"
          text="Sunday"
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
