import "./location.scss";
import { useState } from "react";

const Location = () => {
  const [showSuggestions, setShowSuggestions] = useState(true);

  return (
    <div className="location">
      <div>
        <input
          type="text"
          placeholder="Location"
          className="location-input"
          onClick={() => setShowSuggestions(!showSuggestions)}
        />
      </div>

      {showSuggestions && (
        <div className="location-suggestions">
          hasdkjf;akljsd;fkja;dkslj f ;asfdgsdfgsdfgsfd
        </div>
      )}
    </div>
  );
};

export default Location;
