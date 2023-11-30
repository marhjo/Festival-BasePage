import FilterButton from "./FilterButton";
export default function FilterList() {
  return (
    <div className="flex gap-3 py-4 lg:mx-44">
      <FilterButton variant="primary" text="Vis alle" />
      <FilterButton variant="secondary" text="Rock" />
      <FilterButton variant="secondary" text="Hypertrash" />
    </div>
  );
}
