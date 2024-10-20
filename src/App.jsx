import { useState, useContext, useEffect } from "react";
import { Context } from "./store/appContext";
import { Home } from "../src/front/pages/home.jsx";
import "./styles/App.css";

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
