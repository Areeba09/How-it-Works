import React from "react";
import Dashboard from "../Dashboard";
import Article from "../Article";
import SectionHeading from "../SectionHeading";
import Nav from "../Nav";
import AssignVisitOnOrderImage from "../AssignVisitOnOrderImage";
function AssignVisitOnOrder() {
  const links = [
    {
      id: "31",
      text: "a. What are orders? How do I create orders for a merchant?",
      link: "/Orders",
    },
    {
      id: "32",
      text: "b. How do I assign visit on an order?",
      link: "/AssignVisitOnOrder",
    },
    {
      id: "33",
      text: "c. What if an order cannot be completed for some reason?",
      link: "/OrderNotCompleted",
    },
  ];

  return (
    <>
      <Nav path={{ name: "Orders", link: "/Orders" }} />
      <div className=" px-32 font-['Mulish'] border flex flex-row my-10  sm:p-0 md:pl-5 lg:pl-12 xl:px-32 2xl:pl-40">
        <Dashboard links={links} title="Dashboard and Account" />
        <div className="flex flex-col px-32 sm:px-5 lg:px-16 xl:px-24">
          <SectionHeading
            heading="MERCHANT APP"
            subHeading="How do I assign visit on an order?"
            description="All orders are automatically displayed in the BusyBee Salesperson app for the assigned salesperson to see. The salesperson can then deliver the order whenever they wish. If however, you want to specify a particular time when the salesperson should go and deliver the order to the merchant, you can assign a visit against that order.
            To assign a visit on the order simply go to the ‘Orders’ tab and click on the order id of the desired order. This will open a side card displaying all details of the order. Click ‘Assign Visit’ and select the date when the order should be delivered. Hit ‘Assign Visit’ to finish."
          />
          <AssignVisitOnOrderImage />
          <Article />
        </div>
      </div>
    </>
  );
}

export default AssignVisitOnOrder;
