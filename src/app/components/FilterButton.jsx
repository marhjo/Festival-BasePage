export default function FilterButton({ variant, text }) {
  return (
    <button
      className={`bg-${variant} text-${variant} border-[#CDD6F4] border-2 px-8 rounded-2xl py-px`}
    >
      {text}
    </button>
  );
}
