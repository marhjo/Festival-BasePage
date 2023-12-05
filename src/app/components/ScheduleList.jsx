import TimeSlot from "./TimeSlot";
export default function ScheduleList({ program, stage, className }) {
  return (
    <ol
      className={` ${className} ${
        stage === "vanaheim" && "lg:border-x-2 border-[#EAAC86]"
      }  list-none pt-4 mx-auto sm:px-16 w-11/12 sm:w-8/12 lg:w-full `}
    >
      {program.mon.map(
        (band) =>
          band.act !== "break" && <TimeSlot key={band.act} program={band} />
      )}
    </ol>
  );
}
