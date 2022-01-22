import { useState } from 'react';
import PageHeader from "../components/PageHeader";
import VerifiedBusinesses from "../components/Tabs/VerifiedBusinesses";
import UnverifiedBusinesses from "../components/Tabs/UnverifiedBusinesses";
import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from 'react-icons/md';

const Businesses = () => {

  const [activeTab, setActiveTab] = useState("tab1");

   const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };

  const handleNext = () => {
    console.log('next...')
  }

  const handlePrev = () => {
    console.log('prev')
  }

  return (
    <div className="container">
      <PageHeader title="Businesses" subTitle="Manage your partner businesses"/>
      <div className="container_content content shadow bg-white">
        <ul className="nav">
          <li className={activeTab === "tab1" ? "active active-color" : ""} onClick={handleTab1}>Verified</li>
          <li className={activeTab === "tab2" ? "active active-color" : ""} onClick={handleTab2}>Unverified</li>
        </ul>
      <div>
        {activeTab === "tab1" ? <VerifiedBusinesses /> : <UnverifiedBusinesses />}  
      </div>

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
export default Businesses