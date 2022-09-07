import React from "react";
import Dashboard from "../Dashboard";
import Article from "../Article";
import SectionHeading from "../SectionHeading";
import Nav from "../Nav";
import RemoveMerchantImage from "../RemoveMerchantImage";
function RemoveMerchant() {
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
            description="merchants can not be completely removed from the records, but if a merchant does not work for you any more you can deactivate that merchant anytime by going to the ‘Merchants’ tab, then click on on the merchant you want to deactivate. This will take you to the merchant details page. Click on the ‘Deactivate’ button to deactivate the merchant. You will not be able to assign visits or add orders to the deactivated merchant. You can, however, activate the merchant back again any time later."
          />
          <SectionHeading description= "1. Click on ‘Import CSV’ button in the top right corner." />
          <RemoveMerchantImage />
          <Article />
        </div>
      </div>
    </>
  );
}

export default RemoveMerchant;
