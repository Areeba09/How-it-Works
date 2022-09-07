import React from "react";
import Dashboard from "../Dashboard";
import Article from "../Article";
import SectionHeading from "../SectionHeading";
import Nav from "../Nav";
import ProductsImage from "../ProductsImage";
function Products() {
  const links = [
    {
      id: "34",
      text: "a. What are products? How do I add new products?",
      link: "/Products",
    },
    {
      id: "35",
      text: "b. How do I add products from my inventory database?",
      link: "/ProductsFromDB",
    },
    { id: "36", text: "c. How do I delete products?", link: "/DeleteProducts" },
  ];

  return (
    <>
      <Nav path={{ name: "Products", link: "/Products?" }} />
      <div className=" px-32 font-['Mulish'] border flex flex-row my-10 sm:p-0 md:pl-5 lg:pl-12 xl:px-32 2xl:pl-40">
        <Dashboard links={links} title="Dashboard and Account" />
        <div className="flex flex-col px-32 sm:px-5 lg:px-16 xl:px-24">
          <SectionHeading
            heading="MERCHANT APP"
            subHeading="What are products? How do I add new products?"
            description="You can create a basic inventory of your products and add it to your BusyBee. These products can be used to create orders for merchants from the BusyBee Organisation as well as from the BusyBee Salesperson app. 
            To add products individually to your BusyBee go to the ‘Products’ tab from your browser, click ‘Add New Product’ and fill in the product details. Hit ‘Add’ to finish."
          />
          <ProductsImage />
          <Article />
        </div>
      </div>
    </>
  );
}

export default Products;
