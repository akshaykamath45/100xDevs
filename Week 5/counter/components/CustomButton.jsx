import React from "react";

const CustomButton = ({ count, handleOnClick }) => {
  return <button onClick={handleOnClick}> Counter {count}</button>;
};

export default CustomButton;
