import React from "react";
import Dashboard from "../Dashboard";
import Article from "../Article";
import SectionHeading from "../SectionHeading";
import Nav from "../Nav";
import EditTransactionImage from "../EditTransactionsImage";
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
            subHeading="Can I edit or modify transactions?"
            description="All transactions can be edited post creation by the organisation. Both the amount value and the date of transaction can be edited by the organisation. All transactions except for a sale transaction associated with an order can be deleted."
          />
          <EditTransactionImage />
          <Article />
        </div>
      </div>
    </>
  );
}

export default TypesOfTransactions;
