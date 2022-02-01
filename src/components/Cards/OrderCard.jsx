import React from "react";
import Button from "../Button";

const OrderCard = ({order: {data}, status}) => {

  return (
    <React.Fragment>
      <div className="order_card shadow">
      <div className="order_card-heading">
        <div><h5 className="details">Order #{data.orderId && data.orderId.substring(0, 5)}</h5><span className="order_card-date">{data.date}</span></div>
        <h5 className="items">{data.storeItem.vendorName ? data.storeItem.vendorName : 'Vendor name'}</h5>
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
        <Button text={status} bgColor="rgb(224,209,92)" color="black" />
      </div>
    </div>
    </React.Fragment>
  );
};

export default OrderCard;
