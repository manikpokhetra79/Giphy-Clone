import React from "react";

const Giphs = ({ gif }) => {
  console.log(gif);
  return (
    <div className="gifContainer">
      <img src={gif.images.original.url} alt={gif.title} />
    </div>
  );
};

export default Giphs;
