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
    footer = <p>You picked {format(selected, desktop)}.</p>;
  }

  return (
    <div className="container">
      <input
        type="text"
        className="date-picker-input"
        onClick={handleInputClick}
        value={selected ? format(selected, desktop) : ""}
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
          className="day-picker-container"
          dayClassName="day-picker-day"
          selectedClassName="day-picker-selected"
        />
      )}
    </div>
  );
};

export default CustomDatePicker;
