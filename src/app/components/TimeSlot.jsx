export default function TimeSlot({ program }) {
  return (
    <li className=" flex justify-between h-20 gap-1 mb-8">
      <h3 className="text-2xl text-secondary">{program.act}</h3>
      <p className="text-2xl text-[#CDD6F4]">
        <span>{program.start}</span>-<span>{program.end}</span>
      </p>
    </li>
  );
}
