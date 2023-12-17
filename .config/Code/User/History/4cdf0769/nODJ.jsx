import "./location.scss";
import { useState } from "react";

const Location = () => {
  const [showSuggestions, setShowSuggestions] = useState(true);

  return (
    <div className="location">
      <input
        type="text"
        placeholder="Location"
        className="location-input"
        onClick={() => setShowSuggestions(!setShowSuggestions)}
      />
      {showSuggestions && (
        <div className="location-suggestions">hasdkjf;akljsd;fkja;dksljf;a</div>
      )}
    </div>
  );
};

export default Location;
