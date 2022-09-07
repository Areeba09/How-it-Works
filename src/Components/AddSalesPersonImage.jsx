import React from "react";
import image1 from "./images/AddPerson-1.png";
import image2 from "./images/AddPerson-2.png";
import image3 from "./images/AddPerson-3.png";
import image4 from "./images/AddPerson-4.png";

function AddSalesPersonImage() {
  return (
    <div className="border w-11/12 flex flex-col sm:w-full sm:items-center sm:justify-center md:w-full md:items-center md:justify-center">
      <img className="mb-7" src={image1} alt="" />
      <img className="mb-7" src={image2} alt="" />
      <img className="mb-7" src={image3} alt="" />
      <img className="mb-7" src={image4} alt="" />
    </div>
  );
}

export default AddSalesPersonImage;
