import "./filterbutton.css";
export default function FilterButton({
  filter,
  text,
  type,
  setFilterProperty,
  filterProperty,
}) {
  // const [activeFilter, setActiveFilter] = useState(false);

  function onFilterChange(e) {
    const filter = e.target.value;
    // setActiveFilter((old) => !old);
    if (filter === "Vis alle") {
      setFilterProperty("");
    } else {
      setFilterProperty(filter);
    }
  }
  function onFilterClick(e) {
    const filter = e.target.value;
    // setActiveFilter((old) => !old);
    if (filterProperty === "Vis alle") {
      setFilterProperty("");
      setFilterProperty((old) => old.filter((i) => i == "Vis alle"));
    } else if (e.target.checked) {
      setFilterProperty((old) => old.concat(filter));
      setFilterProperty((old) => old.filter((i) => i !== "Vis alle"));
    } else {
      setFilterProperty((old) => old.filter((i) => i !== e.target.value));
    }
  }
  return (
    <>
      {type === "radio" && (
        <>
          <input
            className="hidden"
            type="radio"
            name="choose-filter"
            id={text}
            value={filter}
            onChange={onFilterChange}
            defaultChecked={filter === "mon" && true}
          />
          <label
            className=" cursor-pointer snap-start hover:bg-secondary-text hover:text-background border-secondary-text border-2 px-8 rounded-2xl py-px"
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
            id={text}
            value={filter}
            onChange={onFilterClick}
            defaultChecked={filter === "Vis alle" ? true : false}
          />
          <label
            className="cursor-pointer snap-start hover:bg-secondary-text hover:text-background border-secondary-text order-secondary-text border-2 px-8 rounded-2xl py-px whitespace-nowrap"
            htmlFor={text}
          >
            {text}
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
