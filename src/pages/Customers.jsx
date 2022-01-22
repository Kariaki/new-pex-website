import PageHeader from "../components/PageHeader";
import FiveColums from '../components/Tables/FiveColums';
import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from 'react-icons/md';
import {CgProfile} from 'react-icons/cg';
import { customersData } from "../Data/db";

const Customers = () => {

  const handleNext = () => {
    console.log('next...')
  }

  const handlePrev = () => {
    console.log('prev')
  }

  return (
    <div className="container">
      <PageHeader title="Customers" subTitle="Manage your customers"/>
      <div className="container_content content shadow bg-white">
        <div>
          <h4>350</h4>
          <p>Total customers</p>
        </div>
        <FiveColums col1="Name" col2="Phone" col3="Email" col4="Address" col5="Orders" data={customersData} icon={<CgProfile style={{color: 'rgb(224,209,92)', marginRight: '5px', fontSize: '12px'}}/>}/>

        <div className="pagination">
          <p>Showing from 1 - 9</p>
          <div className="btns">
            <button className="page-btn" onClick={handlePrev}><MdKeyboardArrowLeft /></button>
            <button className="page-btn right-btn" onClick={handleNext}><MdKeyboardArrowRight /></button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Customers