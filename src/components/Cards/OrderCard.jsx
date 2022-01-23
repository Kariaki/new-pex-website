import React, { useState } from "react";
import Button from "../Button";
import OrderModal from "../Modals/OrderModal";
import OrderList from "./OrderList";

const OrderCard = ({orders, status}) => {

  const [open, setOpen] = useState(false);
  const [clickedItem, setClickedItem] = useState([]);
  
  const handleOrderModal = (orderItems) => {
    setClickedItem(orderItems)
    setOpen(true)
  }

  return (
    <React.Fragment>
      <OrderModal open={open} setOpen={setOpen} orderItems={clickedItem} status={status}/>
    {orders.map(order => (
      order.map(ord => (
      <div className="order_card shadow">
      <div className="order_card-heading">
        <span><h5 className="details">Order #{ord.orderNumber}</h5><span className="order_card-date">{ord.date}</span></span>
        <h5 className="items">{ord.itemsNumber}</h5>
      </div>
      <div className="order_items custom-scrollbar">
        <OrderList order={order}/>
        <OrderList order={order}/>
        <OrderList order={order}/>
      </div>
      <hr />
      <div className="order_total">
        <h5>#7000</h5>
        <Button text={status} bgColor="rgb(224,209,92)" color="black"  onClick={() => handleOrderModal(order)}/>
      </div>
    </div>
      ))
    ))}
    </React.Fragment>
  );
};

export default OrderCard;
