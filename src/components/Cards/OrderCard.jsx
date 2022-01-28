import React, { useState } from "react";
import Button from "../Button";
import OrderModal from "../Modals/OrderModal";
import OrderList from "./OrderList";
import logogo from '../../assets/logogo.jpg';

const OrderCard = ({order: {data}, status}) => {

  const [open, setOpen] = useState(false);
  const [clickedItem, setClickedItem] = useState([]);
  
  const handleOrderModal = (id) => {
    setClickedItem(id)
    setOpen(true)
  }

  return (
    <React.Fragment>
      <OrderModal open={open} setOpen={setOpen} clickedItem={clickedItem} status={status} data={data}/>
      <div className="order_card shadow">
      <div className="order_card-heading">
        <span><h5 className="details">Order #{data.storeItem.id}</h5><span className="order_card-date">22, december 2022</span></span>
        <h5 className="items">23</h5>
      </div>
      <div className="order_items">
        <div className="order_item">
          <img src={data.storeItem.imageUrl} alt={data.storeItem.name} />
          <div className="order_detail">
            <h5>{data.storeItem.name}</h5>
            <p>₦{data.storeItem.price}</p>
          </div>
        </div>

        <div className="order_qty">
            <p>Qty : {data.quantity}</p>
          </div>
      </div>
      <hr />
      <div className="order_total">
        <h5>₦{data.price}</h5>
        <Button text={status} bgColor="rgb(224,209,92)" color="black"  onClick={() => handleOrderModal(data.id)}/>
      </div>
    </div>
    </React.Fragment>
  );
};

export default OrderCard;
