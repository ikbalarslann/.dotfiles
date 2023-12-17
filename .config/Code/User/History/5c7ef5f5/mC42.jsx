import "../shopping-card.scss";

const ShoppingCard = () => {
  const white = (
    <svg
      width="34"
      height="40"
      viewBox="0 0 56 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
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
      viewBox="0 0 56 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="56" height="48" rx="24" fill="#252525" />
      <path
        d="M17 15H21L23.2728 27.2731C23.4045 27.9841 24.0246 28.5 24.7477 28.5H36.5"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21.5 17.5H39L37.7541 23.3143C37.6059 24.0059 36.9947 24.5 36.2874 24.5H23"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle cx="25.25" cy="32.75" r="1.75" fill="white" />
      <circle cx="34.75" cy="32.75" r="1.75" fill="white" />
    </svg>
  );

  return (
    <div className="shopping-card">
      <h1>shopping card</h1>
      {white}
      {black}
    </div>
  );
};

export default ShoppingCard;
