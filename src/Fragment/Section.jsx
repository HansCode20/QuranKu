import React from "react";
import About from "../components/About";
import TextAos from "../components/TextAos";

const Section = ({ children }) => {
  return (
    <div>
      <h1>
        <About />
        {children}
        <TextAos />
      </h1>
    </div>
  );
};

export default Section;
