import React from "react";
import image1 from "./images/Currency-1.png";
import image2 from "./images/Currency-2.png";
import image3 from "./images/Currency-3.png";
import image4 from "./images/Currency-4.png";

function ChangeCurrencyImage() {
  return (
    <div className="w-11/12 flex flex-col sm:w-full sm:items-center sm:justify-center md:w-full md:items-center md:justify-center">
      <img className="mb-7" src={image1} alt="" />
      <img className="mb-7" src={image2} alt="" />
      <img className="mb-7" src={image3} alt="" />
      <img className="mb-7" src={image4} alt="" />
    </div>
  );
}

export default ChangeCurrencyImage;
