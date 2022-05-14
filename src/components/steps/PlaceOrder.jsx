import React from 'react';
import OrderSummary from '../../components/OrderSummary';
import { useCart } from '../../contexts/cartContext';


const PlaceOrder = ({ cart, user}) => {

  const { address, contact } = useCart();

  return (
    <div className="place_order">
      <div className="place_order-details-left">
        <div className="customer-information">
          <h4>Customer information</h4>
          <p>{user?.displayName ? user.displayName : 'John Doe'}</p>
          <p>{user.email}</p>
          <p>{contact}</p>
        </div>

        <div className="horizontal-line"></div>

        <div className="delivery-address">
          <h4>Delivering to</h4>
          <p>{address}</p>
        </div>

        <div className="horizontal-line"></div>

      </div>

      <div className="place_order-details-right">
        <OrderSummary cart={cart} user={user} />
      </div> 
    </div>
  )
}

export default PlaceOrder