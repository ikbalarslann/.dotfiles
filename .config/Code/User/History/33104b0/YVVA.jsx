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

  let version = window.innerWidth > 760 ? desktop : mobile;

  const handleInputClick = () => {
    setShowDatePicker(!showDatePicker);
  };

  return (
    <div className="container">
      <div>
        <svg
          width="25"
          height="34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Misc (Regular)" clip-path="url(#clip0_1208_2460)">
            <path
              id="Vector"
              d="M22.0137 3.75H2.51367C1.68524 3.75 1.01367 4.42157 1.01367 5.25V21.75C1.01367 22.5784 1.68524 23.25 2.51367 23.25H22.0137C22.8421 23.25 23.5137 22.5784 23.5137 21.75V5.25C23.5137 4.42157 22.8421 3.75 22.0137 3.75Z"
              stroke="#252525"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M1.01367 9.75H23.5137"
              stroke="#252525"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_3"
              d="M7.01367 6V0.75"
              stroke="#252525"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_4"
              d="M17.5137 6V0.75"
              stroke="#252525"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1208_2460">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0.261719)"
              />
            </clipPath>
          </defs>
        </svg>
        <input
          type="text"
          className="date-picker-input"
          onClick={handleInputClick}
          value={selected ? format(selected, version) : ""}
          placeholder="Date"
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
        />
      )}
    </div>
  );
};

export default CustomDatePicker;
