import React from "react";
import "./Section.css";

function Section({ Icon, title, color, selected }) {
  return (
    <div className={`section ${selected && "action--selected"}`}>
      <Icon />
      <p>{title}</p>
    </div>
  );
}

export default Section;
