import React,{ useState, useEffect } from "react";
import VerificationModal from '../Modals/VerificationModal';
import UnverifiedVendorCard from "../Cards/UnverifiedVendorCard";

import { db } from '../../firebase-config';
import {doc, getDoc} from 'firebase/firestore';

const UnverifiedVendors = ({unverifiedVendors}) => {

  const [open, setOpen] = useState(false);
  const [clickId, setClickId] = useState('');
  const [vendor, setVendor] = useState(null);
  const [msg, setMsg] = useState('');

  const handleVerificationModal = () => {
    setOpen(true)
  }


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


  if(msg){
    return <p>{msg}</p>
  }

  return (
    <React.Fragment>
        {vendor && <VerificationModal open={open} setOpen={setOpen} vendor={vendor} clickId={clickId} />}
        <div className="grid_container grid_size">
        {unverifiedVendors && unverifiedVendors.map(vendors => (
          <React.Fragment key={vendors.id}>
          <UnverifiedVendorCard data={vendors} click={handleVerificationModal} setClickId={setClickId}/>
          </React.Fragment>
        ))}
        </div>
    </React.Fragment>
  );
};

export default UnverifiedVendors;
