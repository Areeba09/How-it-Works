import React from "react";
import Dashboard from "../Dashboard";
import Article from "../Article";
import SectionHeading from "../SectionHeading";
import Nav from "../Nav";
import RemoveSalesPersonImage from "../RemoveSalesPersonImage";

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
            subHeading="What if I want to remove a salesperson?"
            description="Salespersons cannot be completely removed from records, but if a salesperson does not work for you any more you can deactivate that salesperson anytime by going to the ‘Salespersons’ tab, then click on the ’Active’ label next to the salesperson name. You will be asked to replace this salesperson by another from your active salespersons. The merchants assigned to the previous salesperson will then be assigned to the new salesperson. If you don’t want to replace the salesperson you can skip the step by clicking ‘No’ and then click ‘Deactivate’ right away."
          />
          <RemoveSalesPersonImage />
          <Article />
        </div>
      </div>
    </>
  );
}

export default RemoveSalesPerson;
