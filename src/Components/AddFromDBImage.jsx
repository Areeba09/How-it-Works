import React from "react";
import image1 from "./images/DB-1.png";
import image2 from "./images/DB-2.png";
import image3 from "./images/DB-3.png";
import image4 from "./images/DB-4.png";
import SectionHeading from "./SectionHeading";

function AddSalesPersonImage() {
  return (
    <div className="border w-11/12 flex flex-col sm:w-full sm:items-center sm:justify-center md:w-full md:items-center md:justify-center">
      <img className="mb-7" src={image1} alt="" />

      <SectionHeading description="2. Upload your .CSV file by clicking on ’SELECT FILE’. Wait for the file to upload and then click ‘Proceed’. BusyBee will run the algorithm to see if your file contains required field headers. Click ‘Proceed’." />

      <img className="mb-7" src={image2} alt="" />

      <SectionHeading description="3. Once the file is checked for headers you will be presented with an overview of your file. Any empty fields will be marked and that particular record will not be added." />

      <img className="mb-7" src={image3} alt="" />

      <SectionHeading description="4. Review your file and when you are satisfied click ‘Proceed’ to finish. In case you want to make changes or corrections to your file you can click ‘Go Back’ any time during the process to stop and begin again." />

      <SectionHeading description="The added salespersons will be displayed in the salespersons table." />

      <img className="mb-7" src={image4} alt="" />

    </div>
  );
}

export default AddSalesPersonImage;
