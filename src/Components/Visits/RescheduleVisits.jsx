import React from "react";
import Dashboard from "../Dashboard";
import Article from "../Article";
import SectionHeading from "../SectionHeading";
import Nav from "../Nav";
import RescheduleVisitImage from './../RescheduleVisitImage';

function RescheduleVisits() {
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
      <Nav path={{ name: "Visit", link: "/Visits?" }} />
      <div className=" px-32 font-['Mulish'] border flex flex-row my-10 sm:p-0 md:pl-5 lg:pl-12 xl:px-32 2xl:pl-40">
        <Dashboard links={links} title= "Dashboard and Account" />
        <div className="flex flex-col px-32 sm:px-5 lg:px-16 xl:px-24">
          <SectionHeading
            heading="MERCHANT APP"
            subHeading="Can I reschedule visits?"
            description="Visits can be rescheduled easily from the ‘Visits’ tab. Click on the edit icon next to the visit you want to reschedule. Select a date and hit ‘Update Visit’ to finish."
          />
          <RescheduleVisitImage />
          <Article />
        </div>
      </div>
    </>
  );
}

export default RescheduleVisits;
