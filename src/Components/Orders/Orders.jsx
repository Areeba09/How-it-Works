import React from "react";
import Dashboard from "../Dashboard";
import Article from "../Article";
import SectionHeading from "../SectionHeading";
import Nav from "../Nav";
import OrderImage from "../OrderImage";
function Orders() {
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
            subHeading="What are orders? How do I create orders for a merchant?"
            description="Orders are product restocking requests for merchants. Orders can be created by salespersons when they visit a merchant or alternatively orders can also be created from the BusyBee Organisation.
            To create an order from the BusyBee organisation got to ‘Orders’ tab from your browser, click ‘Add New Order’ and select the merchant from the list. The add the products from the product list along with the quantity. If the product is not listed add the product right there by clicking ‘Add new product’. Click ‘Add Products’ to proceed to the confirmation page. You can review the added products here. Click ‘Confirm Order’ to finish creating the new order.
            The new order will appear in the orders table."
          />
          <OrderImage />
          <Article />
        </div>
      </div>
    </>
  );
}

export default Orders;
