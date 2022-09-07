import React from "react";
import Dashboard from "../Dashboard";
import Article from "../Article";
import SectionHeading from "../SectionHeading";
import Nav from "../Nav";
import TerritoryImage from '../TerritoryImage';

function Territory() {
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
        <Dashboard links={links} title= "Dashboard and Account" />
        <div className="flex flex-col px-32 sm:px-5 lg:px-16 xl:px-24">
          <SectionHeading
            heading="MERCHANT APP"
            subHeading="How do I add salespersons from my existing database?"
            description="Territory is a group of closely located merchants marked by user defined boundaries. Territories help organise merchants in groups to make merchant management easier, for example you can assign visits to multiple merchants at once using territories. To assign a visit to a territory go to the ‘Visits’ tab from your browser. Click on the ‘Create Visit’ button in the top right corner, select visit type, then select the ‘Territory’ option. Type in the territory name, then click ‘Create Visit’ to finish."
          />
          <TerritoryImage />
          <Article />
        </div>
      </div>
    </>
  );
}

export default Territory;
