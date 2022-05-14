import React from 'react';
import OrderSummary from '../OrderSummary';
import { useCart } from '../../contexts/cartContext';

const YourDetails = ({ cart, user }) => {

  const { contact, setContact, address, setAddress } = useCart();

  return (
    <div className="your_details">

       <h2>Your Information</h2>

      <div className="your_details-details">
        <div className="your_details-details-left">

          <div className='horizontal-line'></div>

          <h4>All fields required</h4>

          <input type="text" placeholder='First Name' value={user?.displayName?.split(' ')[0]} readOnly />
          <input type="text" placeholder='Last Name' value={user?.displayName?.split(' ')[1]} readOnly />
          <input type="email" placeholder='Email' value={user?.email} readOnly />
          <input type="tel" placeholder='Mobile Number' value={contact} onChange={e => setContact(e.target.value)}/>

          <div className='horizontal-line'></div>

          <h2>Delivery Information</h2>

          <h4>Note: Delivery is only within Yenagoa at the moment</h4>

          <textarea type="text" placeholder='Delivery Address' className='text-area' value={address} onChange={e => setAddress(e.target.value)} />

        </div>
        
        <div className="your_details-details-right">
          <OrderSummary cart={cart} user={user}/>
        </div>    
      </div>
    </div>
  )
}

export default YourDetails