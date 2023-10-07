
const DropDown = ({searchByRegion}) => {

  const options = [
    { value: "", label: "Filter by Region" },
    { value: "Africa", label: "Africa" },
    { value: "americas", label: "Americas" },
    { value: "asia", label: "Asia" },
    { value: "europe", label: "Europe" },
    { value: "oceania", label: "Oceania" },
  ];
  
  return (
    <select onChange={searchByRegion} className="dropdown">
       {options.map(options => (
        <option
          key={options.label}
          value={options.value}
          className='dropdown__content '
        >
          {options.label}
        </option>
      ))}
    </select>
  );
};

export default DropDown;
