import TimeSlot from "./TimeSlot";
export default function ScheduleList({
  program,
  stage,
  className,
  filterProperty,
}) {
  return (
    <ol
      className={` ${className} ${
        stage === "vanaheim" && "lg:border-x-2 border-accent"
      }  list-none pt-4 mx-auto sm:px-10 lg:px-9  w-11/12 sm:w-8/12 lg:w-full `}
    >
      {program[filterProperty].map(
        (band) =>
          band.act !== "break" && <TimeSlot key={band.act} program={band} />
      )}
    </ol>
  );
}
