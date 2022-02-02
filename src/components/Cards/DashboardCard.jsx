import React, { useState, useEffect } from 'react';

import { db } from '../../firebase-config';
import { collection, query, onSnapshot, where } from "firebase/firestore";

const DashboardCard = ({order: {data}}) => {

  const [vendor, setVendor] = useState([]);


  useEffect(() => {
      const res = query(
        collection(db, "vendors"), where("verified", "==", true));
      onSnapshot(res, (querySnapshot) => {
        setVendor(
          querySnapshot.docs.map((doc) => ({
            data: doc.data(),
          }))
        );
      });
  }, []);

// const totalPrice = orders.reduce((acc, curr)=> acc + curr.data.price, 0);
// const totalQuantity = orders.reduce((acc, curr)=> acc + curr.data.quantity, 0);

  return (
    <React.Fragment>
        <div className='dashboard_card-container shadow'>
          {vendor && vendor.map(vend => (
            vend.data.id === data.vendorId && <img src={vend.data.profileUrl} alt={vend.data.name} style={{width: '50px', height: '50px', borderRadius: '50%', objectFit: 'contain', border: '1px solid rgb(224,209,92)'}}/>
          ))}
        <p>{data.storeItem.vendorName ? data.storeItem.vendorName : 'Vendor Name'}</p>
        <div>
          <h5>Sold out</h5>
          <span>{data.quantity} {data.quantity > 1 ? 'orders' : 'order'}</span>
        </div>
        <div>
          <h5>Pay</h5>
          <span>₦{data.price}</span>
        </div>
        </div>
    </React.Fragment>
  )
}

export default DashboardCard;