import React, { useState } from 'react';
import Header from '../components/Header';
import PageHeader from "../components/PageHeader";
import PendingOrders from '../components/Tabs/PendingOrders';
import FulfilledOrders from '../components/Tabs/FulfilledOrders';
import CancelledOrders from '../components/Tabs/CancelledOrders';

const Orders = () => {

  const [activeTab, setActiveTab] = useState("tab1");

   const handleTab1 = () => {
    setActiveTab("tab1");
  };

  const handleTab2 = () => {
    setActiveTab("tab2");
  };

  const handleTab3 = () => {
    setActiveTab("tab3");
  };


  return (
    <React.Fragment>
      <Header />
    <div className="container">
      <PageHeader title="Orders" subTitle="Take your customer's order"/>
      <div className="container_content content">
        <ul className="nav">
            <li className={activeTab === "tab1" ? "active active-color" : ""} onClick={handleTab1}>Pending</li>
            <li className={activeTab === "tab2" ? "active active-color" : ""} onClick={handleTab2}>Fulfilled</li>
            <li className={activeTab === "tab3" ? "active active-color" : ""} onClick={handleTab3}>Cancelled</li>
          </ul>
        <div>
            {activeTab === "tab1" ? <PendingOrders /> : activeTab === 'tab2' ? <FulfilledOrders /> : < CancelledOrders />}
        </div>
      </div>
    </div>
    </React.Fragment>
  )
}
export default Orders