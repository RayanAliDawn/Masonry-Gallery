import React from "react";

const Image = (props) => {
  return (
    <div className="w-full" >
      <img src={props.src} alt="" />
    </div>
  );
};

export default Image;
