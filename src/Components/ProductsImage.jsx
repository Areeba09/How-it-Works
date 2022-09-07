import React from "react";
import image1 from "./images/product-1.png";
import image2 from "./images/product-2.png";
import image3 from "./images/product-3.png";


function ProductsImage() {
  return (
    <div className="border w-11/12 flex flex-col sm:w-full sm:items-center sm:justify-center md:w-full md:items-center md:justify-center">
      <img className="mb-7" src={image1} alt="" />
      <img className="mb-7" src={image2} alt="" />
      <img className="mb-7" src={image3} alt="" />
    </div>
  );
}

export default ProductsImage;