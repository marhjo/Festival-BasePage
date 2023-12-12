import "./filterbutton.css";
export default function FilterButton({
  filter,
  text,
  type,
  setFilterProperty,
  isChecked,
}) {
  function onFilterChange(e) {
    const filter = e.target.value;
    setFilterProperty(filter);
  }
  function onFilterClick(e) {
    const filter = e.target.value;
    if (filter === "Vis alle") {
      setFilterProperty([]);
      setFilterProperty((old) => old.concat("Vis alle"));
    } else if (e.target.checked) {
      setFilterProperty((old) => old.filter((i) => i !== "Vis alle"));
      setFilterProperty((old) => old.concat(filter));
    } else {
      setFilterProperty((old) => old.filter((i) => i !== e.target.value));
    }
  }
  return (
    <>
      {type === "radio" && (
        <>
          <input
            className="hidden "
            type="radio"
            name="choose-filter"
            id={text}
            value={filter}
            onChange={onFilterChange}
            defaultChecked={filter === "mon"}
          />
          <label
            className=" cursor-pointer snap-start hover:bg-secondary-text hover:text-background border-secondary-text border-2 rounded-2xl py-px px-8 sm:flex-1 text-center"
            htmlFor={text}
          >
            {text}
          </label>
        </>
      )}
      {type === "checkbox" && (
        <>
          <input
            className="hidden"
            type="checkbox"
            name="choose_filter"
            id={filter}
            value={filter}
            onChange={onFilterClick}
            checked={isChecked}
          />
          <label
            className="cursor-pointer snap-start hover:bg-secondary-text hover:text-background border-secondary-text order-secondary-text border-2 px-8 rounded-2xl py-px whitespace-nowrap"
            htmlFor={filter}
          >
            {filter}
          </label>
        </>
      )}
    </>
  );
}
{
  /* <button
      onClick={() => onFilterClick(filter)}
      className={`snap-start ${
        // (activeFilter && "bg-primary text-primary") ||
        active && "bg-primary text-primary"
      } focus:bg-secondary-text focus:text-dark-blue
       hover:bg-secondary-text hover:text-dark-blue border-secondary-text border-2 px-8 rounded-2xl py-px whitespace-nowrap`}
    >
      {text}
    </button> */
}
