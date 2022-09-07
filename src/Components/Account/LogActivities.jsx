import React from "react";
import Dashboard from "../Dashboard";
import Article from "../Article";
import SectionHeading from "../SectionHeading";
import Nav from "../Nav";
import LogActivitiesImage from "../LogActivitiesImage";

function LogActivities() {
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
            subHeading="Can I log activities?"
            description="BusyBee automatically records activities like new transactions, assignments to salespersons, visit completions, orders, app logins, etc so that you always stay on top of your business activities. You can see the complete log of activities from your BusyBee dashboard by scrolling down to the activities section in the bottom right of you dashboard."
          />
          <LogActivitiesImage />
          <Article />
        </div>
      </div>
    </>
  );
}

export default LogActivities;
