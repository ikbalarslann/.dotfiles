import "../location-date-search.scss";
import CustomDatePicker from "../datepicker/index.jsx";
import Location from "../location/index.jsx";

const SearchBar = () => {
  return (
    <div className="location-date-search">
      <input type="text" className="search input" placeholder="location" />
      <div className="hr"></div>

      <input type="date" className="date input" placeholder="date" />
      <button className="search-btn">Search</button>
    </div>
  );
};

export default SearchBar;
