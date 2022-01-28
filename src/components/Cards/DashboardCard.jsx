import React, { useState, useEffect } from 'react';
import moment from 'moment';

import { db } from '../../firebase-config';
import { collection, query, onSnapshot, where } from "firebase/firestore";

const DashboardCard = ({vendor: {data}}) => {
  let now = new Date();
  const dateString = moment(now).format('YYYY-MM-DD');

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const res = query(collection(db, 'orders'), where('vendorId', "==", data.id), where('date', '==', dateString))// orderBy('created', 'desc'))
    onSnapshot(res, (querySnapshot) => {
    setOrders(querySnapshot.docs.map(doc => ({
      data: doc.data()
    })))
  })
},[data.id, dateString])

const totalPrice = orders.reduce((acc, curr)=> acc + curr.data.price, 0);
const totalQuantity = orders.reduce((acc, curr)=> acc + curr.data.quantity, 0);

  return (
    <React.Fragment>
      {orders.map(order => (
        <div className='dashboard_card-container shadow'>
          {console.log(order)}
        <img src={data.profileUrl} alt={data.name} style={{width: '50px', height: '50px', borderRadius: '50%', objectFit: 'contain', border: '1px solid rgb(224,209,92)'}}/>
        <p>{data.name }</p>
        <div>
          <h5>Sold out</h5>
          <span>{totalQuantity} orders</span>
        </div>
        <div>
          <h5>Pay</h5>
          <span>₦{totalPrice}</span>
        </div>
        </div>
      ))}
    </React.Fragment>
  
  )
}

export default DashboardCard;