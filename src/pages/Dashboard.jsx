import React, { useState } from 'react';
import PageHeader from "../components/PageHeader";
import Header from '../components/Header';
import DashboardCard from '../components/Cards/DashboardCard';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';


const Dashboard = ({vendors, err, loading}) => {

  const [startDate, setStartDate] = useState(new Date());

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
            <div className="grid_container grid_size custom-scrollbar">
              {vendors && vendors.map(vendor => (
                <React.Fragment>
                  <DashboardCard vendor={vendor} err={err} loading={loading} startDate={startDate} />
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
