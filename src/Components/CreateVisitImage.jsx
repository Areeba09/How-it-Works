import React from "react";
import image1 from "./images/visits-1.png";
import image2 from "./images/visits-2.png";
import image3 from "./images/visits-3.png";
import image4 from "./images/visits-1.png";
import image5 from "./images/visits-2.png";
import image6 from "./images/visits-3.png";
import SectionHeading from "./SectionHeading";


function CreateVisitImage() {
  return (
    <div className="border w-11/12 flex flex-col sm:w-full sm:items-center sm:justify-center md:w-full md:items-center md:justify-center">
      <img className="mb-7" src={image1} alt="" />
      <SectionHeading description= "2. Select Visit Date, Visit Type and Vendor- if you want to assign for a single vendor, or select Territory if you want to assign for multiple vendors" />

      <img className="mb-7" src={image2} alt="" />
      <SectionHeading description= "3. Hit ‘Create Visit’ to finish." />

      <img className="mb-7" src={image3} alt="" />
      <SectionHeading description= "To assign a visit from the ‘Vendors’ tab go to the ‘Vendors’ tab from your browser, then-" />
      <SectionHeading description= "1. Select the checkboxes against the vendors you want to assign visits to." />

      <img className="mb-7" src={image4} alt="" />
      <SectionHeading description= "2. Click the ‘Assign Visit’ button" />

      <img className="mb-7" src={image5} alt="" />
      <SectionHeading description= "3. Select Visit Date and Visit Type. Then hit ‘Assign Visit’ to finish." />

      <img className="mb-7" src={image6} alt="" />

    </div>
  );
}

export default CreateVisitImage;