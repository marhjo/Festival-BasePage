export default function TimeSlot({ program }) {
  return (
    <li className=" flex justify-between h-20 lg:h-28 xl:h-24 gap-6 mb-8">
      <h3 className="text-xl  sm:text-2xl lg:text-xl xl:text-2xl text-secondary">
        {program.act}
      </h3>
      <p className=" flex text-xl sm:text-2xl lg:text-xl xl:text-2xl text-secondary-text">
        <span>{program.start}</span>-<span>{program.end}</span>
      </p>
    </li>
  );
}
