import "../location-date-search.scss";
import CustomDatePicker from "../datepicker/index.jsx";
import Location from "../location/index.jsx";

const SearchBar = () => {
  return (
    <div className="location-date-search">
      <Location />
      <CustomDatePicker />
      <button className="search-btn">Search</button>
    </div>
  );
};

export default SearchBar;
