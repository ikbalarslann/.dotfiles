import "../login.scss";
import { useState } from "react";

const Login = () => {
  const downarrow = (
    <svg
      width="14"
      height="9"
      viewBox="0 0 14 9"
      fill="none"
      xmlns="
    http://www.w3.org/2000/svg"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M12.625 1.65552L7.265 7.01502C7.23022 7.04985 7.18891 7.07748 7.14344 7.09634C7.09797 7.11519 7.04922 7.12489 7 7.12489C6.95078 7.12489 6.90203 7.11519 6.85656 7.09634C6.81109 7.07748 6.76978 7.04985 6.735 7.01502L1.375 1.65552"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
    const uparrow =
     <svg
    width="14"
    height="9"
    viewBox="0 0 14 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="rotate(180, 7, 4.5)">
    
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M12.625 1.65552L7.265 7.01502C7.23022 7.04985 7.18891 7.07748 7.14344 7.09634C7.09797 7.11519 7.04922 7.12489 7 7.12489C6.95078 7.12489 6.90203 7.11519 6.85656 7.09634C6.81109 7.07748 6.76978 7.04985 6.735 7.01502L1.375 1.65552"
        stroke="black" <!-- Change this line -->
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
          </svg>;
  const toggleActive = () => {
    const login = document.querySelector(".login-button");
    login.classList.toggle("login-button-active");
  };
  return (
    <button className="login-button" onClick={toggleActive}>
      Login {downarrow}
    </button>
  );
};

export default Login;
