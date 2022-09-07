import React from "react";
import Dashboard from "../Dashboard";
import Article from "../Article";
import SectionHeading from "../SectionHeading";
import Nav from "../Nav";
import TypesImage from "../TypesImage";

function TypesOfTransactions() {
  const links = [
    {
      id: "29",
      text: "a. What are the different types of transactions?",
      link: "/TypesOfTransactions",
    },
    {
      id: "30",
      text: "b. Can I edit or modify transactions?",
      link: "/EditTransactions",
    },
  ];

  return (
    <>
      <Nav path={{ name: "Transactions", link: "/TypesOfTransactions" }} />
      <div className=" px-32 font-['Mulish'] border flex flex-row my-10 sm:p-0 md:pl-5 lg:pl-12 xl:px-32 2xl:pl-40">
        <Dashboard links={links} title="Dashboard and Account" />
        <div className="flex flex-col px-32 sm:px-5 lg:px-16 xl:px-24">
          <SectionHeading
            heading="MERCHANT APP"
            subHeading="What are the different types of transactions?"
            description="BusyBee groups transactions into 4 types- Opening Balance, Sale, Collection and return. Opening balances for merchants are added at the time of creating a merchant and represent whatever amount was outstanding against a merchant prior to the transition to BusyBee. Sales transactions represent the sale amount of the products delivered to the merchant, similarly collection represents the amount paid by the merchant on a sale. Return shows the value of products returned to the organisation by the merchant. However, returns will not be deducted from the total sale figures of the salesperson."
          />
          <TypesImage />
          <Article />
        </div>
      </div>
    </>
  );
}

export default TypesOfTransactions;
