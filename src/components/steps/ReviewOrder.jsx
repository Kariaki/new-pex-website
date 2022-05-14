import React from 'react';
import { Link } from 'react-router-dom';
import OrderSummary from '../OrderSummary';
import CartItem from '../Cards/CartItem';

const ReviewOrder = ({ cart, user }) => {

  return (
    <div className="review_order">
       <h2>Review your order</h2>

       <div className='review_order-horizontal-line-top'></div>
        
       <div className='review_order-details'>
          <div className="review_order-details-left">
            {cart.length && cart.map((item, i) => (
              <React.Fragment key={i} >
                <CartItem item={item} />
                <div className='review_order-horizontal-line'></div>
              </React.Fragment>
            ))}
            <Link to="/users/meals">order more</Link>
          </div>
          <div className="review_order-details-right">
          <OrderSummary cart={cart} user={user} />
          </div> 
      </div>   
    </div>
  )
}

export default ReviewOrder