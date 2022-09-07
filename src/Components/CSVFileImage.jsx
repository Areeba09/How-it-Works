import React from "react";
import image1 from "./images/import-1.png";
import image2 from "./images/import-2.png";
import image3 from "./images/import-3.png";
import SectionHeading from "./SectionHeading";


function CSVFileImage() {
  return (
    <div className="border w-11/12 flex flex-col sm:w-full sm:items-center sm:justify-center md:w-full md:items-center md:justify-center">
      <img className="mb-7" src={image1} alt="" />
      <SectionHeading descriptions="A CSV file has a fairly simple structure. It’s a list of data separated by commas. For example, let’s say you have a few salespersons in a contact manager, and you export them as a CSV file. You’d get a file containing text like this:
        Name,Email,Phone Number,Address
        Bob Smith,bob@example.com,123-456-7890,123 Gold Street
        Mike Jones,mike@example.com,098-765-4321,321 Silver Avenue" />
      
      <img className="mb-7" src={image2} alt="" />
      <SectionHeading descriptions="You can open and edit .CSV files on Windows in Notepad or Notepad++. If you are using Mac OS you can use TextEdit to open and edit .CSV files.
      If you want a more comprehensive understanding of .CSV files you can refer to https://www.howtogeek.com/348960/what-is-a-csv-file-and-how-do-i-open-it/
      Subscription packages allow you to extend the abilities of your BusyBee over what you get from the trial period." />

      <img className="mb-7" src={image3} alt="" />
    </div>
  );
}

export default CSVFileImage;