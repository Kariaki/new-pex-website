import { useState } from "react";
import FiveColums from "../Tables/FiveColums";
import VerifiedVendorModal from "../Modals/VerifiedVendorModal";
import { verifiedBusinessData } from '../../Data/db';

const VerifiedBusinesses = () => {

  const [open, setOpen] = useState(false);

  const handleVerifiedVendorModal = () => {
    setOpen(true)
    console.log('Modal open...')
  }
  return (
    <div>
      <VerifiedVendorModal open={open} setOpen={setOpen}/>
      <FiveColums col1="Business" col2="Contact Details" col3="Address" col4="Menus" col5="Orders" data={verifiedBusinessData} click={handleVerifiedVendorModal}/>
    </div>
    );
};

export default VerifiedBusinesses;
