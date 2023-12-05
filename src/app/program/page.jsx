import FilterButton from "../components/FilterButton";
import ScheduleList from "../components/ScheduleList";

export default async function Program() {
  const res = await fetch("http://localhost:8080/schedule");
  const program = await res.json();

  return (
    <main className="bg-[#1E1F2E]">
      <h1 className="text-5xl sm:text-7xl text-secondary mx-3 md:mx-12 lg:mx-40 mb-16 mt-28">
        Program
      </h1>
      <div className="flex flex-wrap gap-3 py-4 mx-3 md:mx-12 lg:mx-44 mb-16">
        <FilterButton program={program} />
      </div>

      <div className="grid lg:grid-cols-3 mx-3 md:mx-12  lg:mx-28  mb-16">
        <h2 className="text-3xl order-none text-center mx-auto lg:mx-0 mb-8 pb-8 w-10/12 sm:w-8/12 lg:w-full  border-b-2 border-[#EAAC86]">
          Midgard
        </h2>
        <h2 className="text-3xl order-2 lg:order-none text-center mx-auto lg:mx-0 mb-8 pb-8 w-10/12 sm:w-8/12 lg:w-full border-b-2 border-[#EAAC86]">
          Vanaheim
        </h2>
        <h2 className="text-3xl order-4 lg:order-none text-center mx-auto lg:mx-0 mb-8 pb-8 w-10/12 sm:w-8/12 lg:w-full border-b-2 border-[#EAAC86]">
          Jutunheim
        </h2>

        <ScheduleList program={program.Midgard} />
        <ScheduleList
          className="order-3"
          program={program.Vanaheim}
          stage="vanaheim"
        />
        <ScheduleList className="order-5" program={program.Jotunheim} />
      </div>
    </main>
  );
}
