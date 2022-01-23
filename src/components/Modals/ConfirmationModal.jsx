import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Button from '../Button';
import { closeIcon } from '../utils/closeIcon';

import logogo from '../../assets/logogo.jpg';

const ConfirmationModal = ({confirmOpen, setConfirmOpen, msg}) => {

    const handleDeleteVendor = () => {
    setConfirmOpen(false)
  }

  const handleSuspendVendor = () => {
    setConfirmOpen(false)
  }

  return (
     <Modal open={confirmOpen} onClose={()=>setConfirmOpen(false)} center closeIcon={closeIcon}>
      <div className='confirmation-modal'>
        <img src={logogo} alt="logogo" style={{width: '60px', height: '60px'}}/>
        <h4>Are you sure?</h4>
        <p>{msg}</p>
      </div>
      <div className="modal-footer">
        <Button text="Cancel" bgColor="transparent" color="black" onClick={handleDeleteVendor}/>
        <Button text="Yes, Verify" bgColor="green" color="white" onClick={handleSuspendVendor}/>
      </div>   
    </Modal>
  );
};

export default ConfirmationModal;
