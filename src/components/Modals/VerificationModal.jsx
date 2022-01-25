import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Button from '../Button';
import { closeIcon } from '../utils/closeIcon';

//Icons
import {MdLocationPin, MdPhone, MdMail} from 'react-icons/md';
import { AiFillGift } from 'react-icons/ai';

//Firebase
import { db } from '../../firebase-config';
import { doc, updateDoc } from "firebase/firestore";

const VerificationModal = ({open, setOpen, vendor, clickId}) => {

  const handleVerifyVendor = async() => {
    const singleVendorRef = doc(db, "vendors", clickId);
    await updateDoc(singleVendorRef, {
    verified: true
    })
    setOpen(false)
  }

  return (
     <Modal open={open} onClose={()=>setOpen(false)} center closeIcon={closeIcon}>
      <div className='verification-modal'>
        <div className="verification-prompt">
        <h4>Are you sure?</h4>
        <p>You're about to verify the following business</p>
        </div>
          <div className="verified_vendor-modal-details details-wrapper">
          <h4>Chicken Republic</h4>
          <div><AiFillGift className='vendor-icon'/> <span>Fast food</span></div>
          <div><MdLocationPin className='vendor-icon'/> <span>{vendor.address}</span></div>
          <div><MdPhone className='vendor-icon'/> <span>{vendor.contactDetails.phone}</span></div>
          <div><MdMail className='vendor-icon'/> <span>{vendor.contactDetails.email}</span></div>
        </div>
      <div className="modal-footer">
        <Button text="Yes, Verify" bgColor="green" color="white" onClick={handleVerifyVendor}/>
      </div>
      </div>
    </Modal>
  );
};

export default VerificationModal;
