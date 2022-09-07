import React from "react";
import image1 from "./images/RA-1.png";
import image2 from "./images/RA-2.png";
import image3 from "./images/RA-3.png";
import image4 from "./images/RA-4.png";

function RegistrationImage() {
  return (
    <div className="w-11/12 flex flex-col sm:w-full sm:items-center sm:justify-center md:w-full md:items-center md:justify-center">
      <img className="mb-7 sm:w-10/12 md:w-auto" src={image1} alt="" />
      <img className="mb-7 sm:w-10/12 md:w-auto" src={image2} alt="" />
      <img className="mb-7 sm:w-10/12 md:w-auto" src={image3} alt="" />
      <img className="mb-7 sm:w-10/12 md:w-auto" src={image4} alt="" />
    </div>
  );
}

export default RegistrationImage;
