import React from "react";
import Dashboard from "../Dashboard";
import Article from "../Article";
import SectionHeading from "../SectionHeading";
import Nav from "../Nav";
import OrderNotCompletedImage from "../OrderNotCompletedImage";
function OrderNotCompleted() {
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
      <div className=" px-32 font-['Mulish'] border flex flex-row my-10 sm:p-0 md:pl-5 lg:pl-12 xl:px-32 2xl:pl-40">
        <Dashboard links={links} title="Dashboard and Account" />
        <div className="flex flex-col px-32 sm:px-5 lg:px-16 xl:px-24">
          <SectionHeading
            heading="MERCHANT APP"
            subHeading="What if an order can not be completed for some reasons?"
            description="If an order cannot be fulfilled on the previously assigned date you can always reassign a new delivery date. To see how a visit can be reassigned a new date, click here. If however, the order cannot be fulfilled at all then you can cancel the order anytime by going to the ’Orders’ tab and click on the order to be cancelled. This will open a side bar containing all details of the order. Click ‘Cancel Order’ and this will cancel the order along with the visits associated with that order."
          />
          <OrderNotCompletedImage />
          <Article />
        </div>
      </div>
    </>
  );
}

export default OrderNotCompleted;
