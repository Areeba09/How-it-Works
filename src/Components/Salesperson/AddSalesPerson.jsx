import React from "react";
import Dashboard from "../Dashboard";
import Article from "../Article";
import SectionHeading from "../SectionHeading";
import Nav from "../Nav";
import AddSalesPersonImage from "../AddSalesPersonImage";

function AddSalesperson() {
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
        <Dashboard links={links} title= "Dashboard and Account" />
        <div className="flex flex-col px-32 sm:px-5 lg:px-16 xl:px-24">
          <SectionHeading
            heading="MERCHANT APP"
            subHeading="How do I add new salespersons?"
            description="To add a new salesperson simply go to the ‘Salespersons’ tab of the BusyBee app from your browser. Click on the the ‘Add New Salesperson’ button and fill in the salesperson details. Hit ‘Add’ when finished. The new salesperson will be displayed in the table as ‘Inactive’ which means you won’t be able to assign them visits. To activate the salesperson, click on the red ‘Inactive’ label next to the salesperson; you will be asked to create an id for the salesperson which the salesperson would use to login from their mobile device. After you type in the id, hit activate and an email along with the credentials will be sent to the salesperson. The salesperson will find the BusyBee Salesperson app download link as well as the id in the email"
          />
          <AddSalesPersonImage />
          <Article />
        </div>
      </div>
    </>
  );
}

export default AddSalesperson;
