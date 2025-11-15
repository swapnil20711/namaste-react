import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  // if not dependency array then it will be called on every render
  // if dependency array is empty then it will be called once
  // if dep array is having [btnName] this will be called when btnName changes
  useEffect(()=>{
    console.log("useEffect called")
  },[btnName])
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          draggable={false}
          style={{ objectFit: "cover" }}
          src={LOGO_URL}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
            className="login"
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
