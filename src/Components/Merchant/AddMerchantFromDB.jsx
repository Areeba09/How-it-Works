import React from "react";
import Dashboard from "../Dashboard";
import Article from "../Article";
import SectionHeading from "../SectionHeading";
import Nav from "../Nav";
import AddMerchantFromDBImage from '../AddMerchantFromDBImage';

function AddMerchantFromDB() {
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
            heading="merchant APP"
            subHeading="You can add all merchants from your current database by uploading the merchant list in a .CSV file with the following headers - businessName, locationName, amount *. To make things even easier, you can download the .CSV template and use it. To download the template go to the ‘Merchants’ tab, click on ‘Import CSV’ and then click on ‘Download our CSV template’. You can know more about .CSV files here.
            Once you have prepared you .CSV containing merchants, upload it to your BusyBee by going to the ‘Merchants’ tab from your browser, then follow these 4 simple steps-"
          />
          <AddMerchantFromDBImage />
          <Article />
        </div>
      </div>
    </>
  );
}

export default AddMerchantFromDB;
