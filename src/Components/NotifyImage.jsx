import React from "react";
import image1 from "./images/Notify-1.png";
import image2 from "./images/Notify-2.png";


function NotifyImage() {
  return (
    <div className="w-11/12 flex flex-col sm:w-full sm:items-center sm:justify-center md:w-full md:items-center md:justify-center">
      <img className="mb-7" src={image1} alt="" />
      <img className="mb-7" src={image2} alt="" />
    </div>
  );
}

export default NotifyImage;
