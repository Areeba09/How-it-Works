import React from "react";
import Dashboard from "../Dashboard";
import Article from "../Article";
import SectionHeading from "../SectionHeading";
import Nav from "../Nav";
import ProductsFromDBImage from "../ProductsFromDBImage";

function ProductsFromDB() {
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
      <Nav path={{ name: "Products", link: "/Products" }} />
      <div className=" px-32 font-['Mulish'] border flex flex-row my-10 sm:p-0 md:pl-5 lg:pl-12 xl:px-32 2xl:pl-40">
        <Dashboard links={links} title="Dashboard and Account" />
        <div className="flex flex-col px-32 sm:px-5 lg:px-16 xl:px-24">
          <SectionHeading
            heading="MERCHANT APP"
            subHeading="How do I add products from my inventory database?"
            description="You can add all products from your current database by uploading the product list in a .CSV file with the following headers - name, unit. To make things even easier, you can download the .CSV template and use it. To download the template go to the ‘Products’ tab, click on ‘Import CSV’ and then click on ‘Download our CSV template’. You can know more about .CSV files here.
            Once you have prepared you .CSV containing products, upload it to your BusyBee by going to the ‘Products’ tab from your browser, then follow these 4 simple steps-"
          />
          <SectionHeading description="1. Click on ‘Import CSV’ button in the top right corner." />
          <ProductsFromDBImage />
          <Article />
        </div>
      </div>
    </>
  );
}

export default ProductsFromDB;
