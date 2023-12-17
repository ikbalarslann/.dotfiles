import "../shopping-card.scss";
import { useState } from "react";

const ShoppingCard = () => {
  const [active, setActive] = useState(false);
  const [count, setCount] = useState(0);

  const buttonClick = () => {
    setActive(!active);
  };

  const white = (
    <svg
      width="34"
      height="40"
      viewBox="0 0 34 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={buttonClick}
    >
      <rect width="34" height="40" rx="17" fill="white" />
      <path
        d="M8.75 13.25H11.75L13.3978 22.1481C13.5295 22.8591 14.1496 23.375 14.8727 23.375H23.375"
        stroke="#252525"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.125 15.125H25.25L24.3791 19.1893C24.2309 19.8809 23.6197 20.375 22.9124 20.375H13.25"
        stroke="#252525"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <ellipse
        cx="14.9375"
        cy="26.5625"
        rx="1.3125"
        ry="1.3125"
        fill="#252525"
      />
      <circle cx="22.0625" cy="26.5625" r="1.3125" fill="#252525" />
    </svg>
  );

  const black = (
    <svg
      width="34"
      height="40"
      viewBox="0 0 34 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={buttonClick}
    >
      <rect width="34" height="40" rx="17" fill="#252525" />
      <path
        d="M8.75 13.25H11.75L13.3978 22.1481C13.5295 22.8591 14.1496 23.375 14.8727 23.375H23.375"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.125 15.125H25.25L24.3791 19.1893C24.2309 19.8809 23.6197 20.375 22.9124 20.375H13.25"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <ellipse cx="14.9375" cy="26.5625" rx="1.3125" ry="1.3125" fill="white" />
      <circle cx="22.0625" cy="26.5625" r="1.3125" fill="white" />
    </svg>
  );

  return (
    <div className="shopping-card">
      <h1>shopping card</h1>

      <div className="shopping-card__counter">{count}</div>
      {active ? black : white}

      {/* <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button> */}
    </div>
  );
};

export default ShoppingCard;
