import { useState } from "react";
import FourColumns from '../Tables/FourColumns';
import { unverifiedBusinessData } from '../../Data/db';
import VerificationModal from '../Modals/VerificationModal';

const UnverifiedBusinesses = () => {

  const [open, setOpen] = useState(false);

  const handleVerificationModal = () => {
    setOpen(true)
    console.log('verification...')
  }
  return (
     <div>
       <VerificationModal open={open} setOpen={setOpen}/>
      <FourColumns col1="Business" col2="Contact Details" col3="Address" col4="" data={unverifiedBusinessData} click={handleVerificationModal} />
    </div>
  );
};

export default UnverifiedBusinesses;
