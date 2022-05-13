import React from 'react';

const OrderSummary = ({ cart, user }) => {
 
  const price = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  const total = price + 200;

  return (
    <div className="order_summary">
      <h4>Order Summary</h4>
      <div className="horizontal-line"></div>
      <div className="order_summary-items-price">
        <p>Items</p>
        <p>{user?.uid ? `₦${price.toLocaleString()}` : '₦0'}</p>
      </div>
      <div className="order_summary-delivery-price">
        <p>Delivery Fee</p>
        <p>{user?.uid ? '₦200' : '₦0'}</p>
      </div>
      <div className="horizontal-line"></div>
      <div className="order_summary-total-price">
        <p>Total</p>
        <p>{user?.uid ? `₦${total.toLocaleString()}` : '₦0'}</p>
      </div>
    </div>
  )
}

export default OrderSummary