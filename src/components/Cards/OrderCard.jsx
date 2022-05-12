import React from "react";
import Button from "../Button";

const OrderCard = ({order, status}) => {

  return (
    <React.Fragment>
      <div className="order_card shadow">
      <div className="order_card-heading">
        <div><h5 className="details">Order #{order?.orderId && order?.orderId.substring(0, 5)}</h5><span className="order_card-date">{order?.date}</span></div>
        <h5 className="items">{order?.storeItem.vendorName ? order?.storeItem.vendorName : 'Vendor name'}</h5>
      </div>
      <div className="order_items">
        <div className="order_item">
          <img src={order?.storeItem.imageUrl} alt={order?.storeItem.name} />
          <div className="order_detail">
            <h5>{order?.storeItem.name}</h5>
            <p>₦{order?.storeItem.price}</p>
          </div>
        </div>

        <div className="order_qty">
            <p>Qty : {order?.quantity}</p>
          </div>
      </div>
      <hr />
      <div className="order_total">
        <h5>₦{order?.price}</h5>
        <Button text={status} bgColor="rgb(224,209,92)" color="black" />
      </div>
    </div>
    </React.Fragment>
  );
};

export default OrderCard;
