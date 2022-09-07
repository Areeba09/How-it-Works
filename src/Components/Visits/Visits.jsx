import React from "react";
import Dashboard from "../Dashboard";
import Article from "../Article";
import SectionHeading from "../SectionHeading";
import Nav from "../Nav";
import VisitImage from './../VisitsImage';

function Visit() {
  const links = [
    { id: "23", text: "a. What are visits?", link: "/Visits" },
    {
      id: "24",
      text: "b. How do I create and assign visits?",
      link: "/CreateVisits",
    },
    {
      id: "25",
      text: "c. Can I reschedule visits?",
      link: "/RescheduleVisits",
    },
    {
      id: "26",
      text: "d. How do I view a visit’s status?",
      link: "/ViewVisitStatus",
    },
    { id: "27", text: "e. How do I cancel a visit?", link: "/CancelVisit" },
    {
      id: "28",
      text: "f. How do I know if the salesperson actually completed the visit?",
      link: "/CompletedVisit",
    },
  ];

  return (
    <>
      <Nav path={{ name: "Visit", link: "/What are visits?" }} />
      <div className=" px-32 font-['Mulish'] border flex flex-row my-10 sm:p-0 md:pl-5 lg:pl-12 xl:px-32 2xl:pl-40">
        <Dashboard links={links} title= "Dashboard and Account" />
        <div className="flex flex-col px-32 sm:px-5 lg:px-16 xl:px-24">
          <SectionHeading
            heading="MERCHANT APP"
            subHeading="What are visits?"
            description="A visit is when a salesperson stops by a merchant to perform an assigned task. The tasks may include taking a product restocking order, a new sale, payment collections, delivering orders, etc."
          />
          <VisitImage />
          <Article />
        </div>
      </div>
    </>
  );
}

export default Visit;
