import "../location-date-search.scss";

const SearchBar = () => {
  return (
    <div className="location-date-search">
      <input type="text" className="search input" placeholder="location" />
      <div className="hr"></div>

      <date-picker format="MMMM DD (DDD), YYYY"></date-picker>

      <input type="date" className="date input" placeholder="date" />
      <button className="search-btn">Search</button>
    </div>
  );
};

export default SearchBar;
