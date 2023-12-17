import "../location-date-search.scss";

const SearchBar = () => {
  return (
    <div className="location-date-search">
      <input type="text" className="search input" placeholder="location" />
      <div className="hr"></div>
      <input type="date" className="date input" placeholder="date" />
    </div>
  );
};

export default SearchBar;
