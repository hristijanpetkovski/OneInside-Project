import React from "react";

import { MainSection, CollapseSection, ImageSection } from "./section";

import "./app.scss";


function App() {
  return (
    <div className="main-conatiner">
        <MainSection />
        <CollapseSection />
        <ImageSection />
    </div>
  );
}

export default App;
