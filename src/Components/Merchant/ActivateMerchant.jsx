import React from "react";
import Dashboard from "../Dashboard";
import Article from "../Article";
import SectionHeading from "../SectionHeading";
import Nav from "../Nav";
import ActivateMerchantImage from "../ActivateMerchantImage";

function ActivateMerchant() {
  const links = [
    { id: "15", text: "a. How do I add new merchants?", link: "/AddMerchant" },
    {
      id: "16",
      text: "b. How do I add merchants from my existing database?",
      link: "/AddMerchantFromDB",
    },
    {
      id: "17",
      text: "c. How do I activate a merchant?",
      link: "/ActivateMerchant",
    },
    {
      id: "18",
      text: "d. What if I want to remove a merchant?",
      link: "/RemoveMerchant",
    },
    {
      id: "19",
      text: "e. How do I view my merchants on the map?",
      link: "/ViewOnMap",
    },
    {
      id: "20",
      text: "f. How do I change the salesperson assigned to a merchant?",
      link: "/ChangeSalesPerson",
    },
    {
      id: "21",
      text: "g. What are territories and how do they help?",
      link: "/Territory",
    },
    {
      id: "22",
      text: "h. How do I create / edit a territory?",
      link: "/CreateTerritory",
    },
  ];

  return (
    <>
      <Nav path={{ name: "Merchant", link: "/AddMerchant" }} />
      <div className=" px-32 font-['Mulish'] border flex flex-row my-10 sm:p-0 md:pl-5 lg:pl-12 xl:px-32 2xl:pl-40">
        <Dashboard links={links} title="Dashboard and Account" />
        <div className="flex flex-col px-32 sm:px-5 lg:px-16 xl:px-24">
          <SectionHeading
            heading="MERCHANT APP"
            subHeading="How do I add salespersons from my existing database?"
            description="To activate a merchant go to the ‘Merchants’ tab from your browser, click on the merchant title you want to activate. This will take you to the merchant details page. Click on the ‘Activate’ button to activate the merchant.
            In case you don’t have a salesperson assigned to the merchant, you will be prompted to assign a salesperson first and then the merchant will be activated."
          />
          <ActivateMerchantImage />
          <Article />
        </div>
      </div>
    </>
  );
}

export default ActivateMerchant;
