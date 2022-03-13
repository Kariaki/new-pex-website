import React, { useEffect, useState } from 'react';
import VendorCard from '../components/Cards/VendorCard';
import UsersHeader from '../components/UsersHeader';


import { db } from '../firebase-config';
import { collection, query, onSnapshot, where } from "firebase/firestore";
const UsersVendors = () => {

  const [loading, setLoading] = useState(false);
  const [vendors, setVendors] = useState([]);
  const [err, setErr] = useState('');

    //Get verified vendors
  useEffect(() => {
    setLoading(true);
    try {
      const data = query(collection(db, "vendors"), where("verified", "==", true));
      onSnapshot(data, (querySnapshot) => {
        setVendors( querySnapshot.docs.map((doc) => (doc.data()))
        );
        setLoading(false);
      });
    } catch (error) {
      setErr(error.message);
      setLoading(false);
    }
  }, []);

  // if(loading){
  //   return <div>loading</div>
  // }

  // if(err){
  //   return <div>{err}</div>
  // }
  
  return (
    <React.Fragment>
      <UsersHeader />
      <div className='users_vendors-container'>
        <h1>Vendors within Yenagoa</h1>
        <div className="users_vendors-grid-container">
          {vendors.map((vendor, i) => (
            <React.Fragment key={i}>
              <VendorCard vendor={vendor} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </React.Fragment>
  )
}

export default UsersVendors