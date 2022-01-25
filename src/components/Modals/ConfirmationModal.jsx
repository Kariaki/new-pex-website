import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Button from '../Button';
import { closeIcon } from '../utils/closeIcon';
import logogo from '../../assets/logogo.jpg';

import { db } from '../../firebase-config';
import { doc, updateDoc } from "firebase/firestore";


const ConfirmationModal = ({confirmOpen, setConfirmOpen, clickId}) => {


  const handleSuspendVendor = async () => {
    const singleVendorRef = doc(db, "vendors", clickId);
    await updateDoc(singleVendorRef, {
    verified: false
    })
    setConfirmOpen(false)
  }



  return (
    <React.Fragment>
      <Modal open={confirmOpen} onClose={()=>setConfirmOpen(false)} center closeIcon={closeIcon}>
        <div className='confirmation-modal'>
          <img src={logogo} alt="logogo" style={{width: '60px', height: '60px'}}/>
          <h4>Are you sure?</h4>
          <p>You can reactivate this business at any time</p>
        </div>
        <div className="modal-footer">
          <Button text="Suspend" bgColor="rgb(224,209,92)" color="rgb(33,31,31)" onClick={handleSuspendVendor}/>
        </div>   
      </Modal>
    </React.Fragment>
  );
};

export default ConfirmationModal;
