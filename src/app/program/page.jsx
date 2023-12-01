import FilterList from "../components/FilterList";
import FilterButton from "../components/FilterButton";
import ScheduleList from "../components/ScheduleList";
import TimeSlot from "../components/TimeSlot";

export default function Program() {
  return (
    <main className="bg-[#1E1F2E]">
      <h1 className="text-5xl sm:text-7xl text-secondary mx-3 md:mx-12 lg:mx-40 mb-16 mt-28">
        Program
      </h1>
      <FilterList>
        <FilterButton variant="secondary" text="Mandag" />
        <FilterButton variant="secondary" text="Tirsdag" />
        <FilterButton variant="secondary" text="Onsdag" />
        <FilterButton variant="secondary" text="Torsdag" />
        <FilterButton variant="secondary" text="Fredag" />
        <FilterButton variant="secondary" text="Lørdag" />
        <FilterButton variant="secondary" text="Søndag" />
      </FilterList>

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
        <ScheduleList />
        <ScheduleList className="order-3" stage="vanaheim" />
        <ScheduleList className="order-5" />
      </div>
    </main>
  );
}
