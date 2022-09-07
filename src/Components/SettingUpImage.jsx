import React from "react";
import image1 from "./images/Setting1.png";


function SettingUpImage() {
  return (
    <div className="w-11/12 flex flex-col sm:w-full sm:items-center sm:justify-center md:w-full md:items-center md:justify-center 2xl:">
      <img className="mb-7" src={image1} alt="" />
    </div>
  );
}

export default SettingUpImage;
