import React, { useState } from "react";
import Header from "../Header/Header";
import SearchBox from "../SearchBox/SearchBox";
import "./App.css";
function App() {
  const [title] = useState("Name-it");

  return (
    <div>
      <Header title={title} />
      <SearchBox />
    </div>
  );
}

export default App;
