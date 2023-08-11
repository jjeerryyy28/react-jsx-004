import React from "react";

const ColorPickerCard = (props) => {
  const { color, title } = props;

  return (
    <div style={{ backgroundColor: color }} className="color-card">
      <div className="color-info">
        <p className="title">{title}</p>
        <p className="color-text">{color}</p>
      </div>
    </div>
  );
};

export default ColorPickerCard;
