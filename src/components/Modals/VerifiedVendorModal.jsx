import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Button from '../Button';
import { closeIcon } from '../utils/closeIcon';

//Icons
import {MdLocationPin, MdPhone, MdMail} from 'react-icons/md';
import { AiFillGift } from 'react-icons/ai';
import ConfirmationModal from './ConfirmationModal';


const VerifiedVendorModal = ({open, setOpen, clickId, vendor}) => {

  const [confirmOpen, setConfirmOpen] = useState(false);

  const handleSuspendVendor = () => {
    setOpen(false)
    setConfirmOpen(true)
  }

  return (
    <React.Fragment>
      <ConfirmationModal confirmOpen={confirmOpen} setConfirmOpen={setConfirmOpen} clickId={clickId}/>
      <Modal open={open} onClose={()=>setOpen(false)} center closeIcon={closeIcon}>
      <div className='verified_vendor-modal'>
        <div className="verified_vendor-modal-heading">
          <img src={vendor.profileUrl} alt="vendor" style={{height: '50px', width: '50px', objectFit: 'contain'}}/>
          <h4>{vendor.name}</h4>
        </div>
        <div className="verified_vendor-modal-details">
          <div><AiFillGift className='vendor-icon'/> <span>Fast food</span></div>
          <div><MdLocationPin className='vendor-icon'/> <span>{vendor.address}</span></div>
          <div><MdPhone className='vendor-icon'/> <span>{vendor.contactDetails.phone}</span></div>
          <div><MdMail className='vendor-icon'/> <span>{vendor.contactDetails.email}</span></div>
        </div>
      <div className="modal-footer">
        <Button text="Suspend" bgColor="rgb(224,209,92)" color="rgb(33,31,31)" onClick={handleSuspendVendor}/>
      </div>
      </div>
    </Modal>
    </React.Fragment>
     
  );
};

export default VerifiedVendorModal;
