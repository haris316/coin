import React from "react";
import "./Navbar.css";
import banner from "../../assets/banner.jpg";
import coin from "../../assets/coin.png";

export default function Navbar() {
  return (
    <div>
      <div className="navbar_bar">
        <div className="navbar_icon_section">
          <img className="navbar_icon" src={coin} />
          <div className="navbar_header">THE COIN</div>
        </div>
        <div className="navbar_options">
          <div className="navbar_one_option">Home</div>
          <div className="navbar_one_option">About</div>
          <div className="navbar_one_option">Login</div>
          <div className="navbar_one_option">Sign Up</div>
        </div>
      </div>
      <img className="navbar_banner" src={banner} />
    </div>
  );
}
