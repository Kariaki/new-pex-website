import React, { useState, useEffect } from 'react';
import PageHeader from "../components/PageHeader";
import Header from '../components/Header';
import DashboardCard from '../components/Cards/DashboardCard';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

import { db } from "../firebase-config";
import { collection, query, where, onSnapshot } from "firebase/firestore";


const Dashboard = () => {

  const [startDate, setStartDate] = useState(new Date());
  const [orders, setOrders] = useState([]);

  const dateString = moment(startDate).format('YYYY-MM-DD');

  useEffect(() => {
    const res = query(collection(db, 'orders'), where('orderStates', '==', 'PROCESSED'), where('date', '==', dateString));
    onSnapshot(res, (querySnapshot) => {
    setOrders(querySnapshot.docs.map(doc => ({
      data: doc.data()
    })))
  })
},[dateString])

  return (
    <React.Fragment>
      <Header />
    <div className="container">
     <PageHeader title="Dashboard" subTitle={(moment(new Date()).format('LLLL').slice(0, -8))}/>
     <div className="dashboard_content content">
          <div className="dashboard_content-orders-card">
            <div className="title">
              <h3>Orders for {(moment(startDate).format('LLLL').slice(0, -8))}</h3>
              <div>
                <DatePicker dateFormat="yyyy-MM-dd" selected={startDate} onChange={(date) => setStartDate(date)} className='date_picker'/>
              </div>  
            </div>
            <div>{orders.length < 1 && <p style={{textAlign: 'center'}}>There are no orders made on this day</p>}</div>
            <div className="grid_container grid_size custom-scrollbar">
              {orders && orders.map(order => (
                <React.Fragment>
                  <DashboardCard order={order} startDate={startDate} />
                </React.Fragment>
              ))}
            </div>
          </div>
     </div> 
    </div>
    </React.Fragment>
  )
}
export default Dashboard
