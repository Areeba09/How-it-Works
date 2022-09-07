import React from "react";
import image1 from "./images/RemovePerson-1.png";


function AddSalesPersonImage() {
  return (
    <div className="border w-11/12 flex flex-col sm:w-full sm:items-center sm:justify-center md:w-full md:items-center md:justify-center">
      <img className="mb-7" src={image1} alt="" />
    </div>
  );
}

export default AddSalesPersonImage;
