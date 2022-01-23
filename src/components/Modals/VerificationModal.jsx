import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Button from '../Button';
import { closeIcon } from '../utils/closeIcon';

//Icons
import {MdLocationPin, MdPhone, MdMail} from 'react-icons/md';
import { AiFillGift } from 'react-icons/ai';

const VerificationModal = ({open, setOpen}) => {

    const handleDeleteVendor = () => {
    setOpen(false)
  }

  const handleSuspendVendor = () => {
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
          <div><MdLocationPin className='vendor-icon'/> <span>No 2, Akenfa Drive Yenagoa</span></div>
          <div><MdPhone className='vendor-icon'/> <span>09012345678</span></div>
          <div><MdMail className='vendor-icon'/> <span>chickenrepublic@gmail.com</span></div>
        </div>
      <div className="modal-footer">
        <Button text="Cancel" bgColor="transparent" color="black" onClick={handleDeleteVendor}/>
        <Button text="Yes, Verify" bgColor="green" color="white" onClick={handleSuspendVendor}/>
      </div>
      </div>
    </Modal>
  );
};

export default VerificationModal;
