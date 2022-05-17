import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import PageHeader from "../components/PageHeader";
import VerifiedVendors from "../components/Tabs/VerifiedVendors";
import UnverifiedVendors from "../components/Tabs/UnverifiedVendors";
// import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from 'react-icons/md';

import { db } from '../firebase-config';
import { collection, query, onSnapshot, where } from "firebase/firestore";

const Businesses = ({vendors}) => {

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');
  const [verifiedVendors, setVerifiedVendors] = useState([]);
  const [unverifiedVendors, setUnverifiedVendors] = useState([]);
  const [activeTab, setActiveTab] = useState("tab1");

//Get verified vendors
useEffect(() => {
    setLoading(true);
    try {
      const data = query(collection(db, "vendors"), where("verified", "==", true));
      onSnapshot(data, (querySnapshot) => {
        setVerifiedVendors( querySnapshot.docs.map((doc) => ({
            data: doc.data(),
          }))
        );
        setLoading(false);
      });
    } catch (error) {
      setErr(error.message);
      setLoading(false);
    }
  }, []);


//Get unverified vendors from firebase
useEffect(() => {
  setLoading(true)
  try {
    const data = query(collection(db, 'vendors'), where('verified', '==', false))
    onSnapshot(data, (querySnapshot) => {
    setUnverifiedVendors(querySnapshot.docs.map(doc => ({
      data: doc.data()
    })))
    setLoading(false);
  })
  } catch (error) {
    setErr(error.message)
    setLoading(false)
  }  
},[])

  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  
  const handleTab2 = () => {
    setActiveTab("tab2");
  };


  return (
    <React.Fragment>
      <Header />
    <div className="container">
      <PageHeader title="Vendors" subTitle="Manage your partner vendors"/>
      <div className="container_content content ">
        <ul className="nav">
          <li className={activeTab === "tab1" ? "active active-color" : ""} onClick={handleTab1}>Verified</li>
          <li className={activeTab === "tab2" ? "active active-color" : ""} onClick={handleTab2}>Unverified</li>
        </ul>
      <div>
        {activeTab === "tab1" ? <VerifiedVendors verifiedVendors={verifiedVendors}/> : <UnverifiedVendors unverifiedVendors={unverifiedVendors}/>}  
      </div>

      {/* <div className="pagination">
          <p>Showing from 1 - 8</p>
          <div className="btns">
            <button className="page-btn" onClick={handlePrev}><MdKeyboardArrowLeft /></button>
            <button className="page-btn right-btn" onClick={handleNext}><MdKeyboardArrowRight /></button>
          </div>
      </div> */}
      </div>
    </div>
    </React.Fragment>
  )
}
export default Businesses