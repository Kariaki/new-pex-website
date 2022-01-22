import FourColumns from '../Tables/FourColumns';
import { unverifiedBusinessData } from '../../Data/db';

const UnverifiedBusinesses = () => {

  const handleVerification = () => {
    console.log('verification...')
  }
  return (
     <div>
      <FourColumns col1="Business" col2="Contact Details" col3="Address" col4="" data={unverifiedBusinessData} click={handleVerification} />
    </div>
  );
};

export default UnverifiedBusinesses;
