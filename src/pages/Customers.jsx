import React, { useState, useEffect } from 'react';
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import Header from '../components/Header';
import FourColums from '../components/Tables/FourColumns';


import { db } from '../firebase-config';
import { collection, query, onSnapshot, orderBy, startAfter, limit, getDocs} from "firebase/firestore";

const Customers = () => {

  const [customers, setCustomers] = useState([]);
  const [nextData, setNextData] = useState([]);
  const [more, setMore] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');

  const handleNext = async () => {
    const lastVisible = nextData.docs[nextData.docs.length-1];
    const next = query(collection(db, "customers"), orderBy('name'), startAfter(lastVisible), limit(8));
    setNextData(await getDocs(next));
    onSnapshot(next, (querySnapshot) => {
    setMore(querySnapshot.docs.map(doc => ({
      data: doc.data()
    })))})
    setCustomers([...customers, ...more])
  };


  useEffect(() => {
  setLoading(true)
  const getCustomers = async() => {
       try {
    const data = query(collection(db, 'customers'), orderBy('name'), limit(8))
    setNextData(await getDocs(data));
    onSnapshot(data, (querySnapshot) => {
    setCustomers(querySnapshot.docs.map(doc => ({
      data: doc.data()
    })))
    setLoading(false);
  })
  } catch (error) {
    setErr(error.message)
    setLoading(false)
  }  
    }

  getCustomers()
 
},[])

if(loading){
  return <p>Loading</p>
}

if(err){
  return <p>{err}</p>
}

  return (
    <React.Fragment>
      <Header />
    <div className="container">
      <PageHeader title="Customers" subTitle="Manage your customers"/>
      <div className="container_content content shadow bg-white">
        {console.log(customers)}
        <div>
          <h4>{customers.length}</h4>
          <p>All customers</p>
        </div>
            <React.Fragment >
               <FourColums col1='Name' col2='Phone' col3='Email' col4='Address' data={customers}/>
            </React.Fragment>
        <div className="pagination">
          <p>Showing from 1 - {customers.length}</p>
          <div className="btns">
            <Button text="Load More" bgColor="rgb(224,209,92)" color="black" onClick={handleNext}/>
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  )
}
export default Customers