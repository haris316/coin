import React from "react";
import "./Home.css";
import Main from "../components/Main/Main";
import Navbar from "../components/Navbar/Navbar";

function Home() {
  return (
    <div className="home_container">
      <Navbar />
      <Main />
    </div>
  );
}

export default Home;
//Navbar
