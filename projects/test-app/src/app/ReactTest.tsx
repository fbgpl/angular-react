import * as React from "react";

export const ReactTest = (props) => {
  const handleClick = () => {
    console.warn("Click handled in react component.");
    props.handleClick();
  };

  return (
    <div>
      <p>This is a regular react component</p>
      <button onClick={handleClick}>Test click</button>
    </div>
  );
};
