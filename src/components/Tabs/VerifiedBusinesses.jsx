import FiveColums from "../Tables/FiveColums";
import { verifiedBusinessData } from '../../Data/db';

const VerifiedBusinesses = () => {

  const handleVerifiedBusinessModal = () => {
    console.log('Modal open...')
  }
  return (
    <div>
      <FiveColums col1="Business" col2="Contact Details" col3="Address" col4="Menus" col5="Orders" data={verifiedBusinessData} click={handleVerifiedBusinessModal}/>
    </div>
    );
};

export default VerifiedBusinesses;
