import React from "react";
import Dashboard from "../Dashboard";
import Article from "../Article";
import SectionHeading from "../SectionHeading";
import Nav from "../Nav";
import CSVFileImage from "../CSVFileImage";

function CSVFile() {
  const links = [
    {
      id: "37",
      text: "a. What is a .CSV file and how do I use it?",
      link: "/CSVFile",
    },
    {
      id: "38",
      text: "b. How do I ensure my .CSV file uploads without conflicts or errors?",
      link: "/UploadWithoutError",
    },
  ];

  return (
    <>
      <Nav path={{ name: "Imports", link: "/CSVFile" }} />
      <div className=" px-32 font-['Mulish'] border flex flex-row my-10 sm:p-0 md:pl-5 lg:pl-12 xl:px-32 2xl:pl-40">
        <Dashboard links={links} title="Dashboard and Account" />
        <div className="flex flex-col px-32 sm:px-5 lg:px-16 xl:px-24">
          <SectionHeading
            heading="MERCHANT APP"
            subHeading="What is a .CSV file and how do I use it?"
            description="A CSV file is a plain text file that contains a list of data separated by commas. These files are frequently used to transfer data between apps. CSV files are frequently supported by databases and contact manager."
          />
          <CSVFileImage />
          <Article />
        </div>
      </div>
    </>
  );
}

export default CSVFile;
