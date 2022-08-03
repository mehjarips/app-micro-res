import React from "react";
import "./button.scss";

const Button = ({ children, varient = "primary" }) => {
  const getBtnClassName = () => {
    if (varient === "primary") return "primary-btn";
    else if (varient === "secondary") return "secondary-btn";
  };
  return (
    <div className="button-container">
      <button className={`btn ${getBtnClassName()}`}>{children}</button>
    </div>
  );
};

export default Button;
