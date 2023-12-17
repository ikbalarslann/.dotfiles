import "../location-date-search.scss";

const SearchBar = () => {
  return (
    <div className="location-date-search">
      <input type="text" placeholder="location" />
      <hr />
      <input type="date" placeholder="date" />
    </div>
  );
};

export default SearchBar;
