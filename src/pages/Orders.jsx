import { useState } from 'react';
import PageHeader from "../components/PageHeader";
import PendingOrders from '../components/Tabs/PendingOrders';
import FulfilledOrders from '../components/Tabs/FulfilledOrders';
import CancelledOrders from '../components/Tabs/CancelledOrders';
import { orders } from '../Data/db';

const Orders = () => {
// console.log(orders)
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
    <div className="container">
      <PageHeader title="Orders" subTitle="Take your customer's order"/>
      <div className="container_content content">
        <ul className="nav">
            <li className={activeTab === "tab1" ? "active active-color" : ""} onClick={handleTab1}>Pending</li>
            <li className={activeTab === "tab2" ? "active active-color" : ""} onClick={handleTab2}>Fulfilled</li>
            <li className={activeTab === "tab3" ? "active active-color" : ""} onClick={handleTab3}>Cancelled</li>
          </ul>
        <div>
            {activeTab === "tab1" ? <PendingOrders orders={orders}/> : activeTab === 'tab2' ? <FulfilledOrders orders={orders}/> : < CancelledOrders orders={orders}/>}   
        </div>
      </div>
    </div>
  )
}
export default Orders