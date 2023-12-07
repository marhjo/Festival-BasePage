import "./filterbutton.css";
export default function FilterButton({
  filter,
  text,
  type,
  setFilterProperty,
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
  function onFilterClick(filter) {
    // setActiveFilter((old) => !old);
    if (filter === "Vis alle") {
      setFilterProperty("");
    } else {
      setFilterProperty(filter);
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
            className=" cursor-pointer snap-start hover:bg-primary hover:text-primary border-[#CDD6F4] border-2 px-8 rounded-2xl py-px"
            htmlFor={text}
          >
            {text}
          </label>
        </>
      )}
      {type === "checkbox" && (
        <button
          onClick={() => onFilterClick(filter)}
          className={` cursor-pointer whitespace-nowrap snap-start focus:bg-primary focus:text-primary
       hover:bg-primary hover:text-primary border-[#CDD6F4] border-2 px-8 rounded-2xl py-px`}
        >
          {text}
        </button>
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
