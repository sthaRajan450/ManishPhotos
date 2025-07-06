import React from "react";

const Card = ({ image, title }) => {
  return (
    <div
     
      className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-end px-20   justify-start"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1 className="text-white mb-50 uppercase text-7xl font-bold font-mono ">
        {title}
      </h1>
    </div>
  );
};

export default Card;
