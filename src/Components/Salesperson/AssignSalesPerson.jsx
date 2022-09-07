import React from "react";
import Dashboard from "../Dashboard";
import Article from "../Article";
import SectionHeading from "../SectionHeading";
import Nav from "../Nav";
import AssignSalesPersonImage from "../AssignSalesPersonImage";

function RemoveSalesPerson() {
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
            subHeading=" How do I assign salesperson to a merchant?"
            description="To assign a salesperson to a merchant go to the ‘merchants’ tab click on the merchant title to open merchant details page, then click on the ‘Add’ / ‘Change’ button against the salesperson to assign a new salesperson. To assign a single salesperson to multiple merchants, simply select the check boxes in front of the merchant titles and then click on the the blue ‘Assign Salesperson’ button. Select the salesperson from the dropdown list and click ‘Add’."
          />
          <AssignSalesPersonImage />
          <Article />
        </div>
      </div>
    </>
  );
}

export default RemoveSalesPerson;
