import "./location.scss";
import { useState } from "react";

const Location = () => {
  const [showSuggestions, setShowSuggestions] = useState(true);

  return (
    <div className="location">
      <div className="location-input-container">
        <svg
          width="18"
          height="20"
          viewBox="0 1 18 20"
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
          placeholder="Location"
          className="location-input"
          onClick={() => setShowSuggestions(!showSuggestions)}
        />
      </div>

      {showSuggestions && (
        <div className="location-suggestions">
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.684 4.042A1.029 1.029 0 0 1 22 5.03l-.001 5.712a1.03 1.03 0 0 1-1.647.823L18.71 10.33l-4.18 5.568a1.647 1.647 0 0 1-2.155.428l-.15-.1-3.337-2.507-4.418 5.885c-.42.56-1.185.707-1.777.368l-.144-.095a1.372 1.372 0 0 1-.368-1.776l.095-.144 5.077-6.762a1.646 1.646 0 0 1 2.156-.428l.149.1 3.336 2.506 3.522-4.69-1.647-1.237a1.03 1.03 0 0 1 .194-1.76l.137-.05 5.485-1.595-.001.001z"
                fill="#000000"
              />
            </svg>{" "}
            Popular
          </div>
          <div>Istanbul</div>
          <div>Izmir</div>
        </div>
      )}
    </div>
  );
};

export default Location;
