import React from "react";
import ColorPickerCard from "./ColorPickerCard";
import "./cards.css";

const Card = () => {
  const colorCards = [
    { title: "#FF6663", color: "PINK" },
    { title: "#333333", color: "GRAY" },
    { title: "#000000", color: "BLACK" },
    { title: "#38BB14", color: "GREEN" },
    { title: "#C90B0B", color: "RED" },
    { title: "#FF8000", color: "ORANGE" },
    { title: "#FFF500", color: "YELLOW" },
    { title: "#7E41A2", color: "PURPLE" },
    { title: "#C14911", color: "BROWN" },
    { title: "#CCCCCC", color: "LIGHT GRAY "}
  ];

  return (
    <div className="color-picker-container">
      {colorCards.map((card, index) => (
        <ColorPickerCard key={index} color={card.color} title={card.title} />
      ))}
    </div>
  );
};

export default Card;
