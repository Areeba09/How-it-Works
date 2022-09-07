import React from "react";
import image1 from "./images/vendor-1.png";
import image2 from "./images/vendor-2.png";
import image3 from "./images/vendor-3.png";


function CreateTerritoryImage() {
  return (
    <div className="border w-11/12 flex flex-col sm:w-full sm:items-center sm:justify-center md:w-full md:items-center md:justify-center">
      <img className="mb-7" src={image1} alt="" />
      <img className="mb-7" src={image2} alt="" />
      <img className="mb-7" src={image3} alt="" />
    </div>
  );
}

export default CreateTerritoryImage;