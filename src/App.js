import React from "react";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import logo from "./images/logo.png";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page">
        <SideBar />
        <div className="recommended-videos"></div>
      </div>
    </div>
  );
}

export default App;
