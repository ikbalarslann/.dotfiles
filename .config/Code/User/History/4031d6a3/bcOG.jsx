import { is } from "date-fns/locale";
import "../wishlist.scss";
import { useState } from "react";

const WishlistButton = () => {
  const [isActive, setIsActive] = useState(false);

  const passive = (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => setIsActive(!isActive)}
    >
      <rect width="22" height="22" fill="#E5E5E5" />
      <g clip-path="url(#clip0_49_4404)">
        <g filter="url(#filter0_d_49_4404)">
          <rect
            x="-973"
            y="-29"
            width="1024"
            height="330"
            rx="12"
            fill="white"
          />
        </g>
        <mask id="path-4-inside-1_49_4404" fill="white">
          <path d="M16.1207 0.948242C13.9978 0.948427 12.04 2.09395 11 3.94476C9.96004 2.09395 8.00219 0.948427 5.87931 0.948242C2.63239 0.948242 0 3.95994 0 7.20686C0 15.362 11 21.0517 11 21.0517C11 21.0517 22 15.362 22 7.20686C22 3.95994 19.3676 0.948242 16.1207 0.948242Z" />
        </mask>
        <path
          d="M16.1207 0.948242C13.9978 0.948427 12.04 2.09395 11 3.94476C9.96004 2.09395 8.00219 0.948427 5.87931 0.948242C2.63239 0.948242 0 3.95994 0 7.20686C0 15.362 11 21.0517 11 21.0517C11 21.0517 22 15.362 22 7.20686C22 3.95994 19.3676 0.948242 16.1207 0.948242Z"
          stroke="#252525"
          stroke-width="3"
          mask="url(#path-4-inside-1_49_4404)"
        />
      </g>
      <rect
        x="-992.5"
        y="-48.5"
        width="1063"
        height="682"
        rx="4.5"
        stroke="#7B61FF"
        stroke-dasharray="10 5"
      />
      <defs>
        <filter
          id="filter0_d_49_4404"
          x="-997"
          y="-45"
          width="1072"
          height="378"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="8" />
          <feGaussianBlur stdDeviation="12" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_49_4404"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_49_4404"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_49_4404">
          <rect
            x="-993"
            y="-49"
            width="1064"
            height="683"
            rx="5"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
  const active = (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => setIsActive(!isActive)}
    >
      <rect width="22" height="22" fill="#E5E5E5" />
      <g clip-path="url(#clip0_49_4404)">
        <g filter="url(#filter0_d_49_4404)">
          <rect
            x="-973"
            y="-29"
            width="1024"
            height="303"
            rx="12"
            fill="white"
          />
        </g>
        <path
          d="M16.1207 0.948242C13.9978 0.948427 12.04 2.09395 11 3.94476C9.96004 2.09395 8.00219 0.948427 5.87931 0.948242C2.63239 0.948242 0 3.95994 0 7.20686C0 15.362 11 21.0517 11 21.0517C11 21.0517 22 15.362 22 7.20686C22 3.95994 19.3676 0.948242 16.1207 0.948242Z"
          fill="#FF585B"
        />
      </g>
      <rect
        x="-992.5"
        y="-388.5"
        width="1063"
        height="682"
        rx="4.5"
        stroke="#7B61FF"
        stroke-dasharray="10 5"
      />
      <defs>
        <filter
          id="filter0_d_49_4404"
          x="-997"
          y="-45"
          width="1072"
          height="351"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="8" />
          <feGaussianBlur stdDeviation="12" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_49_4404"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_49_4404"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_49_4404">
          <rect
            x="-993"
            y="-389"
            width="1064"
            height="683"
            rx="5"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
  return (
    <div className="wishlist">
      wishlist
      {isActive ? active : passive}
    </div>
  );
};

export default WishlistButton;
