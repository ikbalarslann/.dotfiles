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
  let version = mobile;

  const handleInputClick = () => {
    setShowDatePicker(!showDatePicker);
  };

  return (
    <div className="container">
      <div>
        <svg
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Misc (Regular)">
            <path
              id="Vector"
              d="M9 10C10.5533 10 11.8125 8.7408 11.8125 7.1875C11.8125 5.6342 10.5533 4.375 9 4.375C7.4467 4.375 6.1875 5.6342 6.1875 7.1875C6.1875 8.7408 7.4467 10 9 10Z"
              stroke="#252525"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M9 1.5625C10.4918 1.5625 11.9226 2.15513 12.9775 3.21002C14.0324 4.26492 14.625 5.69566 14.625 7.1875C14.625 9.74275 10.8195 16.15 9.46875 18.1863C9.41744 18.2636 9.34778 18.3271 9.26599 18.371C9.1842 18.4148 9.09282 18.4378 9 18.4378C8.90718 18.4378 8.8158 18.4148 8.73401 18.371C8.65222 18.3271 8.58256 18.2636 8.53125 18.1863C7.1805 16.15 3.375 9.74275 3.375 7.1875C3.375 5.69566 3.96763 4.26492 5.02252 3.21002C6.07742 2.15513 7.50816 1.5625 9 1.5625V1.5625Z"
              stroke="#252525"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
        <input
          type="text"
          className="date-picker-input"
          onClick={handleInputClick}
          value={selected ? format(selected, version) : ""}
          placeholder="Select a date"
        />
      </div>

      {showDatePicker && (
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={(date) => {
            setSelected(date);
            setShowDatePicker(false);
          }}
          className="day-picker-container"
          dayClassName="day-picker-day"
          selectedClassName="day-picker-selected"
        />
      )}
    </div>
  );
};

export default CustomDatePicker;
