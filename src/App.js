import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from "./Components/Registration/Registration";
import SettingUp from "./Components/SettingUp/SettingUp";
import Contact from "./Components/Contact";
import Card from "./Components/Card";
import ChangeCurrency from "./Components/Account/ChangeCurrency";
import LogActivities from "./Components/Account/LogActivities";
import GetNotified from "./Components/Account/GetNotified";
import InfoGraphs from "./Components/Account/InfoGraphs";
import AddSalesPerson from "./Components/Salesperson/AddSalesPerson";
import AddFromDB from "./Components/Salesperson/AddFromDB";
import RemoveSalesPerson from "./Components/Salesperson/RemoveSalesPerson";
import AssignSalesPerson from "./Components/Salesperson/AssignSalesPerson";
import ViewInfo from "./Components/Salesperson/ViewInfo";
import ViewSales from "./Components/Salesperson/ViewSales";
import Target from "./Components/Salesperson/Target";
import AddMerchant from "./Components/Merchant/AddMerchant";
import AddMerchantFromDB from "./Components/Merchant/AddMerchantFromDB";
import ActivateMerchant from "./Components/Merchant/ActivateMerchant";
import RemoveMerchant from "./Components/Merchant/RemoveMerchant";
import ViewOnMap from "./Components/Merchant/ViewOnMap";
import ChangeSalesPerson from "./Components/Merchant/ChangeSalesPerson";
import Territory from "./Components/Merchant/Territory";
import CreateTerritory from "./Components/Merchant/CreateTerritory";
import Visit from "./Components/Visits/Visits";
import CreateVisits from "./Components/Visits/CreateVisits";
import RescheduleVisits from "./Components/Visits/RescheduleVisits";
import ViewVisitStatus from "./Components/Visits/ViewVisitStatus";
import CancelVisit from "./Components/Visits/CancelVisit";
import CompletedVisit from "./Components/Visits/CompletedVisit";
import TypesOfTransactions from "./Components/Transactions/TypesOfTransactions";
import EditTransactions from "./Components/Transactions/EditTransactions";
import Orders from "./Components/Orders/Orders";
import AssignVisitOnOrder from "./Components/Orders/AssignVisitOnOrder";
import OrderNotCompleted from "./Components/Orders/OrderNotCompleted";
import Products from "./Components/Products/Products";
import ProductsFromDB from "./Components/Products/ProductsFromDB";
import DeleteProducts from "./Components/Products/DeleteProducts";
import CSVFile from "./Components/Imports/CSVFile";
import UploadWithoutError from "./Components/Imports/UploadWithoutError";
import EditAccount from "./Components/Account/EditAccount";

// import Learn from './Components/learn';

function App() {
  const option = [
    {
      name: "msg",
      title: "Send us a Message",
      description: "Send us an email we will get back to you.",
      button: "Send Email",
    },
    {
      name: "call",
      title: "Give us a Call",
      description: "Give us a call right away.",
      button: "Call Now",
    },
    {
      name: "demo",
      title: "Schedule a demo",
      description: "",
      button: "Book Now",
    },
  ];

  return (
    <Router>
      <div className="flex flex-col justify-center items-center">
        <Routes>
          {/* Registration */}
          <Route path="/" element={<Registration />} />
          <Route path="/SettingUp" element={<SettingUp />} />

          {/* Account */}
          <Route path="/EditAccount" element={<EditAccount />} />
          <Route path="/ChangeCurrency" element={<ChangeCurrency />} />
          <Route path="/LogActivities" element={<LogActivities />} />
          <Route path="/GetNotified" element={<GetNotified />} />
          <Route path="/InfoGraphs" element={<InfoGraphs />} />

          {/* Salesperson */}
          <Route path="/AddSalesPerson" element={<AddSalesPerson />} />
          <Route path="/AddFromDB" element={<AddFromDB />} />
          <Route path="/RemoveSalesPerson" element={<RemoveSalesPerson />} />
          <Route path="/AssignSalesPerson" element={<AssignSalesPerson />} />
          <Route path="/ViewInfo" element={<ViewInfo />} />
          <Route path="/ViewSales" element={<ViewSales />} />
          <Route path="/Target" element={<Target />} />

          {/* Merchant */}
          <Route path="/AddMerchant" element={<AddMerchant />} />
          <Route path="/AddMerchantFromDB" element={<AddMerchantFromDB />} />
          <Route path="/ActivateMerchant" element={<ActivateMerchant />} />
          <Route path="/RemoveMerchant" element={<RemoveMerchant />} />
          <Route path="/ViewOnMap" element={<ViewOnMap />} />
          <Route path="/ChangeSalesPerson" element={<ChangeSalesPerson />} />
          <Route path="/Territory" element={<Territory />} />
          <Route path="/CreateTerritory" element={<CreateTerritory />} />

          {/* Visits */}
          <Route path="/Visit" element={<Visit />} />
          <Route path="/CreateVisits" element={<CreateVisits />} />
          <Route path="/RescheduleVisits" element={<RescheduleVisits />} />
          <Route path="/ViewVisitStatus" element={<ViewVisitStatus />} />
          <Route path="/CancelVisit" element={<CancelVisit />} />
          <Route path="/CompletedVisit" element={<CompletedVisit />} />

          {/* // Transaction */}
          <Route
            path="/TypesOfTransactions"
            element={<TypesOfTransactions />}
          />
          <Route path="/EditTransactions" element={<EditTransactions />} />

          {/* // Orders */}
          <Route path="/Orders" element={<Orders />} />
          <Route path="/AssignVisitOnOrder" element={<AssignVisitOnOrder />} />
          <Route path="/OrderNotCompleted" element={<OrderNotCompleted />} />

          {/* Products */}
          <Route path="/Products" element={<Products />} />
          <Route path="/ProductsFromDB" element={<ProductsFromDB />} />
          <Route path="/DeleteProducts" element={<DeleteProducts />} />

          {/* // Imports */}
          <Route path="/CSVFile" element={<CSVFile />} />
          <Route path="/UploadWithoutError" element={<UploadWithoutError />} />
        </Routes>

        <Contact item={option} />
        <div className="flex flex-row xl:gap-7 mb-7 justify-center sm:gap-5 sm:w-auto lg:gap-6 2xl:gap-11 ">
          {option.map((el) => (
            <Card
              name={el.name}
              title={el.title}
              description={el.description}
              button={el.button}
            />
          ))}
        </div>
      </div>
    </Router>
  );
}

export default App;
