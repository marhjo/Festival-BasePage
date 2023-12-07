export default function TimeSlot({ program }) {
  return (
    <li className=" flex justify-between h-20 lg:h-28 xl:h-24 gap-1 mb-8">
      <h3 className="text-xl sm:text-2xl lg:text-xl xl:text-2xl text-secondary">
        {program.act}
      </h3>
      <p className="text-xl sm:text-2xl lg:text-xl xl:text-2xl text-[#CDD6F4]">
        <span>{program.start}</span>-<span>{program.end}</span>
      </p>
    </li>
  );
}
