import React, { useState, useEffect } from "react";
import VerifiedVendorModal from "../Modals/VerifiedVendorModal";
import VerifiedVendorCard from "../Cards/VerifiedVendorCard";

import { db } from '../../firebase-config';
import {doc, getDoc} from 'firebase/firestore';

const VerifiedVendors = ({verifiedVendors}) => {

  const [open, setOpen] = useState(false);
  const [clickId, setClickId] = useState('');
  const [vendor, setVendor] = useState(null);
  const [msg, setMsg] = useState('')

  useEffect(() => {
  const getSingle = async() => {
  const docRef = doc(db, "vendors", clickId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    setVendor(docSnap.data())
  } else {
    setMsg("This vendor does not exist!")
  }
  }
  getSingle()
  }, [clickId]);


  const handleVerifiedVendorModal = () => {
    setOpen(true)
  }

  if(msg){
    return <p>{msg}</p>
  }
  
  return (
    <React.Fragment>
      {vendor && <VerifiedVendorModal open={open} setOpen={setOpen} clickId={clickId} vendor={vendor}/>}
      <div className="grid_container grid_size">
      {verifiedVendors && verifiedVendors.map(vendors => (
        <React.Fragment>
        <VerifiedVendorCard data={vendors} click={handleVerifiedVendorModal} setClickId={setClickId} />
      </React.Fragment>
      ))}
    </div>
    </React.Fragment>
    );
};

export default VerifiedVendors;
