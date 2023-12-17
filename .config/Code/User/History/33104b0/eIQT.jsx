import "./datepicker.scss";
import { useState, useEffect } from "react";
import { format } from "date-fns";

import { DayPicker } from "react-day-picker";
import "../../../../../node_modules/react-day-picker/dist/style.css";

const CustomDatePicker = () => {
  const [selected, setSelected] = useState();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [version, setVersion] = useState(
    window.innerWidth > 300 ? "dd / MM / yyyy" : "MMM dd"
  );

  useEffect(() => {
    const handleResize = () => {
      setVersion(window.innerWidth > 300 ? "dd / MM / yyyy" : "MMM dd");
    };

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleInputClick = () => {
    setShowDatePicker(!showDatePicker);
  };

  return (
    <div className="container">
      <div>{/* ... (your SVG and input code) */}</div>

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
