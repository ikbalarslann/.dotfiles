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
        onClick={() => setShowSuggestions(!showSuggestions)}
      />
      {showSuggestions && (
        <div className="location-suggestions">
          hasdkjf;akljsd;fkja;dksljf;asfdgsdfgsdfgsfd
        </div>
      )}
    </div>
  );
};

export default Location;
