import React from "react";
import Dashboard from "../Dashboard";
import Article from "../Article";
import SectionHeading from "../SectionHeading";
import Nav from "../Nav";
import AddMerchantImage from '../AddMerchantImage';

function AddMerchants() {
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
            description="To add a new merchant simply go to the ‘Merchants’ tab of the BusyBee app from your browser. Click on the ‘Add New Merchant’ button in the top right corner. This will open the search merchant window where you can search for your merchants from the BusyBee database by typing in the merchant title or address. If the desired merchant pops up select the merchant and then hit ‘Next’. Fill in merchant details and then click ‘Save’. This will automatically provide you with the merchant's mapped location. In case your search query does not find a match in the BusyBee database, click ‘Add New Merchant’ and then fill in the details and then hit ’Add’. This will create a new merchant, however, the merchant will be unmapped by default and can be mapped only from the BusyBee Salesperson app.
            All new merchants are inactive by default and need to be activated manually before you can assign visits or add orders to them. To see how you can activate a merchant click here."
          />
          <AddMerchantImage />
          <Article />
        </div>
      </div>
    </>
  );
}

export default AddMerchants;
