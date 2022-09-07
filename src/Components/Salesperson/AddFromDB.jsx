import React from "react";
import Dashboard from "../Dashboard";
import Article from "../Article";
import SectionHeading from "../SectionHeading";
import Nav from "../Nav";
import AddFromDBImage from "../AddFromDBImage";

function AddFromDB() {
  const links = [
    {
      id: "8",
      text: "a. How do I add new salespersons?",
      link: "/AddSalesPerson",
    },
    {
      id: "9",
      text: "b. How do I add salespersons from my existing database?",
      link: "/AddFromDB",
    },
    {
      id: "10",
      text: "c. What if I want to remove a salesperson?",
      link: "/RemoveSalesPerson",
    },
    {
      id: "11",
      text: "d. How do I assign salesperson to a merchant?",
      link: "/AssignSalesPerson",
    },
    {
      id: "12",
      text: "e. How do I view/edit a salesperson’s information?",
      link: "/ViewInfo",
    },
    {
      id: "13",
      text: "f.How do I view sales and other transactions made by a salesperson?",
      link: "/ViewSales",
    },
    {
      id: "14",
      text: "g.. How do I set sales targets for salespersons?",
      link: "/Target",
    },
  ];

  return (
    <>
      <Nav path={{ name: "Salesperson", link: "/AddSalesPerson" }} />
      <div className=" px-32 font-['Mulish'] border flex flex-row my-10 sm:p-0 md:pl-5 lg:pl-12 xl:px-32 2xl:pl-40">
        <Dashboard links={links} title="Dashboard and Account" />
        <div className="flex flex-col px-32 sm:px-5 lg:px-16 xl:px-24">
          <SectionHeading
            heading="merchant APP"
            subHeading="How do I add salespersons from my existing database?"
            description="You can add all salespersons from your current database by uploading the salesperson list in a .CSV file with the following headers - email, name, locationName, contact. To make things even easier, you can download the .CSV template and use it. To download the template go to the ‘Salespersons’ tab, click on ‘Import CSV’ and then click on ‘Download our CSV template’. You can know more about .CSV files here.
            Once you have prepared you .CSV containing salespersons, upload it to your BusyBee by going to the ‘Salespersons’ tab from your browser, then follow these 4 simple steps-"
          />
          <SectionHeading description="1. Click on ‘Import CSV’ button in the top right corner." />
          <AddFromDBImage />
          <Article />
        </div>
      </div>
    </>
  );
}

export default AddFromDB;
