import React from 'react';
import logogo from '../../assets/logogo.jpg'

const OrderList = ({order}) => {
  return (
    <React.Fragment>
      {order.map(ord => (
        <div className="order_list">
          <div className="order_list-item">
          <img src={logogo} alt="logogo" style={{height: '40px', width: '40px'}}/>
          <div className="order_list-detail">
            <h5>{ord.name}</h5>
            <p>#{ord.price}</p>
          </div>
          </div>
          <div className="order_list-qty">
            <p>Qty : {ord.qty}</p>
          </div>
        </div>
      ))}
        
    </React.Fragment>
  );
};

export default OrderList;
