import "./datepicker.scss";
import { useState } from "react";
import { format } from "date-fns";

import { DayPicker } from "react-day-picker";
import "../../../../../node_modules/react-day-picker/dist/style.css";

const CustomDatePicker = () => {
  const [selected, setSelected] = useState();
  const [showDatePicker, setShowDatePicker] = useState(false);

  const mobile = "MMM dd";
  const desktop = "dd / MM / yyyy";

  const handleInputClick = () => {
    setShowDatePicker(!showDatePicker);
  };

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "MMM dd")}.</p>;
  }

  return (
    <div>
      <input
        type="text"
        className="date-picker-input"
        onClick={handleInputClick}
        value={selected ? format(selected, "MMM dd") : ""}
        placeholder="Select a date"
      />
      {showDatePicker && (
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={(date) => {
            setSelected(date);
            setShowDatePicker(false);
          }}
          footer={footer}
          className="day-picker-container" // Apply the container class
          dayClassName="day-picker-day" // Apply the day class
          selectedClassName="day-picker-selected" // Apply the selected day class
        />
      )}
    </div>
  );
};

export default CustomDatePicker;
