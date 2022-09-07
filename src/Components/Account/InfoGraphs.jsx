import React from "react";
import Dashboard from "../Dashboard";
import SectionHeading from "../SectionHeading";
import Article from "../Article";
import Nav from "../Nav";
import InfoGraphsImage from "../InfoGraphsImage";

function InfoGraphs() {
  const links = [
    {
      id: "3",
      text: "a. How do I view / edit my profile and account details and settings?",
      link: "/EditAccount",
    },
    {
      id: "4",
      text: "b. How do I set/change my currency unit?",
      link: "/ChangeCurrency",
    },
    { id: "5", text: "c. Can I log activities?", link: "/LogActivities" },
    {
      id: "6",
      text: "d. Will I get notified on important activities?",
      link: "/GetNotified",
    },
    {
      id: "7",
      text: "e. How do I make the best use of information graphs on my dashboard?",
      link: "/InfoGraphs",
    },
  ];

  return (
    <>
      <Nav path={{ name: "Dashboard", link: "/EditAccount" }} />
      <div className=" px-32 font-['Mulish'] flex flex-row my-10 sm:p-0 md:pl-5 lg:pl-12 xl:px-32 2xl:pl-40">
        <Dashboard links={links} title="Dashboard and Account" />
        <div className="flex flex-col px-32 sm:px-5 lg:px-16 xl:px-24">
          <SectionHeading
            heading="MERCHANT APP"
            subHeading="How do I make the best use of Information graphs on my dashboard?"
            description="BusyBee puts together handy graphs representing your sales, collections, merchants and visits information. Graphs help visualise information for an intuitive understanding of your growth trend. Graphs by default display data for one month up to the current date. You can however, narrow in on any time period using the calendar date filter."
          />
          <InfoGraphsImage />
          <Article />
        </div>
      </div>
    </>
  );
}

export default InfoGraphs;
