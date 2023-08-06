import React from "react";
import "./fancy-card.scss";

const FancyCard = ({ title, subtitle, image, children }) => {
  return (
    <div className="fancy-card">
      <div className="fancy-card-header">
        <h2 className="fancy-card-title">{title}</h2>
        <p className="fancy-card-subtitle">{subtitle}</p>
      </div>
      <div className="fancy-card-image-container">
        <img className="fancy-card-image" src={image} alt={title} />
      </div>
      <div className="fancy-card-description-container">
        {children}
      </div>
    </div>
  );
};

export default FancyCard;