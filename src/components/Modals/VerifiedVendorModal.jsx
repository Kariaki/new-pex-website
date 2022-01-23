import { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Button from '../Button';
import { closeIcon } from '../utils/closeIcon';
import logogo from '../../assets/logogo.jpg';

//Icons
import {MdLocationPin, MdPhone, MdMail} from 'react-icons/md';
import { AiFillGift } from 'react-icons/ai';
import ConfirmationModal from './ConfirmationModal';


const VerifiedVendorModal = ({open, setOpen, itemsData}) => {

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [msg, setMsg] = useState('');

  const handleDeleteVendor = () => {
    setMsg('This action is irreversible')
    setOpen(false)
    setConfirmOpen(true)
  }

  const handleSuspendVendor = () => {
    setMsg('You can reactivate this business at anytime')
    setOpen(false)
    setConfirmOpen(true)
  }

  

  return (
    <>
    <ConfirmationModal confirmOpen={confirmOpen} setConfirmOpen={setConfirmOpen} msg={msg}/>
    <Modal open={open} onClose={()=>setOpen(false)} center closeIcon={closeIcon}>
      <div className='verified_vendor-modal'>
        <div className="verified_vendor-modal-heading">
          <img src={logogo} alt="vendor" style={{height: '40px', width: '40px'}}/>
          <h4>Chicken Republic</h4>
        </div>
        <div className="verified_vendor-modal-details">
          <div><AiFillGift className='vendor-icon'/> <span>Fast food</span></div>
          <div><MdLocationPin className='vendor-icon'/> <span>No 2, Akenfa Drive Yenagoa</span></div>
          <div><MdPhone className='vendor-icon'/> <span>09012345678</span></div>
          <div><MdMail className='vendor-icon'/> <span>chickenrepublic@gmail.com</span></div>
        </div>
        <div className="verified_vendor-modal-offers">
          <div>
            <span>Menu</span>
            <span>7</span>
          </div>
          <div>
            <span>Meals</span>
            <span>35</span>
          </div>
          <div>
            <span>Orders</span>
            <span>305</span>
          </div>
        </div>
      <div className="modal-footer">
        <Button text="Delete vendor" bgColor="transparent" color="black" onClick={handleDeleteVendor}/>
        <Button text="Suspend" bgColor="green" color="white" onClick={handleSuspendVendor}/>
      </div>
      </div>
    </Modal>
    </>
     
  );
};

export default VerifiedVendorModal;
