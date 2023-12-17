import "./location.scss";
import { useState } from "react";

const Location = () => {
  const [showSuggestions, setShowSuggestions] = useState(false);

  return (
    <div className="location">
      <input type="text" placeholder="Location" className="location-input" />
      {showSuggestions && (
        <div className="suggestions">hasdkjf;akljsd;fkja;dksljf;a</div>
      )}
    </div>
  );
};

export default Location;
