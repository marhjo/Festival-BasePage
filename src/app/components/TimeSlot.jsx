export default function TimeSlot() {
  // props {act, start, end}
  return (
    <li className=" flex justify-between  mb-8">
      <h3 className="text-2xl text-secondary">Bandname</h3>
      <p className="text-2xl text-[#CDD6F4]">
        <span>00</span>-<span>02</span>
      </p>
    </li>
  );
}
