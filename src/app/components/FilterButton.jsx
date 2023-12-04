export default function FilterButton({ data, variant, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`bg-${variant} text-${variant} hover:bg-primary hover:text-primary border-[#CDD6F4] border-2 px-8 rounded-2xl py-px`}
    >
      {data}
    </button>
  );
}
