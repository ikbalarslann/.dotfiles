import "../location-date-search.scss";

const SearchBar = () => {
  return (
    <div className="location-date-search">
      location- date- search
      <div>
        <input type="text" placeholder="location" />
        <hr />
        <input type="date" placeholder="date" />
      </div>
    </div>
  );
};

export default SearchBar;
