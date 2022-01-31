import React,{ useState, useEffect } from "react";
import OrderCard from "../Cards/OrderCard";

import { db } from "../../firebase-config";
import { collection, query, where, orderBy, onSnapshot } from "firebase/firestore";

const FulfilledOrders = () => {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');

  useEffect(() => {
  setLoading(true)
  try {
    const data = query(collection(db, 'orders'), where('orderStates', '==', 'PROCESSED'), orderBy("date", "desc"))
    onSnapshot(data, (querySnapshot) => {
    setOrders(querySnapshot.docs.map(doc => ({
      data: doc.data()
    })))
    setLoading(false);
  })
  } catch (error) {
    setErr(error.message)
    setLoading(false)
  }  
},[])

if(loading){
  return <p>Loading...</p>
}

if(err){
  return <p>{err}</p>
}

  return (
    <div className="grid_container grid_size">
      {orders.map(order => (
        <React.Fragment>
          <OrderCard order={order} status="Open"/>
        </React.Fragment>
      ))}
    </div>
    );
};

export default FulfilledOrders;