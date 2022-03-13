import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UsersHeader from '../components/UsersHeader';
import Breakfast from '../components/Tabs/Breakfast';
import Snacks from '../components/Tabs/Snacks';
import Drinks from '../components/Tabs/Drinks';
import Food from '../components/Tabs/Food';
import logo from '../assets/logogo.jpg';
import OrderModal from '../components/Modals/OrderModal';


import { db } from '../firebase-config';
import { getDoc, doc, collection, query, onSnapshot, where } from 'firebase/firestore';

const VendorPage = () => {

  const { id } = useParams();
  const [vendor, setVendor] = useState({});
  const [cuisines, setCuisines] = useState([]);
  const [breakfast, setBreakfast] = useState([]);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');
  const [activeTab, setActiveTab] = useState("tab1");
  const [open, setOpen] = useState(false);
  const [clickId, setClickId] = useState('');
  const [item, setItem] = useState({});

   const handleTab1 = () => {
    setActiveTab("tab1");
  };

  const handleTab2 = () => {
    setActiveTab("tab2");
  };

  const handleTab3 = () => {
    setActiveTab("tab3");
  };

  const handleTab4 = () => {
    setActiveTab("tab4");
  };


  //Get single vendor
  useEffect(() => {
    const getSingleVendor = async () => {
      setLoading(true)
      try {
        const docRef = doc(db, 'vendors', id);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
          setVendor(docSnap.data())
        }
        setLoading(false)
      } catch (error) {
        setErr(error.message);
        setLoading(false)
      }
    }

    getSingleVendor();
  }, [id])


   //Get vendor items
  useEffect(() => {
    setLoading(true);
    try {
      const data = query(collection(db, "store"), where("vendorId", "==", id));
      onSnapshot(data, (querySnapshot) => {
        setCuisines( querySnapshot.docs.map((doc) => (doc.data()))
        );
        setLoading(false);
      });
    } catch (error) {
      setErr(error.message);
      setLoading(false);
    }
  }, [id]);



  useEffect(() => {
    setBreakfast(cuisines.filter(cuisine => cuisine.category === 'BREAKFAST'));
    setSnacks(cuisines.filter(cuisine => cuisine.category === 'SNACKS'));
    setDrinks(cuisines.filter(cuisine => cuisine.category === 'DRINKS'));
    setFood(cuisines.filter(cuisine => cuisine.category === 'FOOD'));
  }, [cuisines])


  return (
    <React.Fragment>
      <UsersHeader />
      <div className="vendor_page-container">
        <OrderModal open={open} setOpen={setOpen} clickId={clickId} item={item}/>
        <img src={vendor.wallImage ?? logo} alt={vendor.name} />
        <div className="profile-img">
          <img src={vendor.profileUrl ? vendor.profileUrl : logo} alt={vendor.name} />
        </div>
        <div className="store_details">
          <div className="about_store">
            <h2>{vendor?.name ?? 'Vendor name'}</h2>
            <p>{vendor?.address ?? 'vendor address'}</p>
            <p>Open from 7:00AM - 10:00PM</p>
          </div>
          <h3>Cuisines</h3>
          <ul className="vendor_tab-nav">
            <li className={activeTab === "tab1" ? "active active-color" : ""} onClick={handleTab1}>Breakfast</li>
            <li className={activeTab === "tab2" ? "active active-color" : ""} onClick={handleTab2}>Snacks</li>
            <li className={activeTab === "tab3" ? "active active-color" : ""} onClick={handleTab3}>Drinks</li>
            <li className={activeTab === "tab4" ? "active active-color" : ""} onClick={handleTab4}>Food</li>
          </ul>
        </div>

        <div className='vendor_page-tabs'>
            {activeTab === "tab1" ? 
            <Breakfast breakfast={breakfast} setOpen={setOpen} setClickId={setClickId} setItem={setItem} loading={loading}/> : activeTab === 'tab2' ? 
            <Snacks snacks={snacks} setOpen={setOpen} setClickId={setClickId} setItem={setItem} loading={loading}/> : 
            activeTab === 'tab3' ? 
            <Drinks  drinks={drinks} setOpen={setOpen} setClickId={setClickId} setItem={setItem} loading={loading}/> : 
            <Food food={food} setOpen={setOpen} setClickId={setClickId} setItem={setItem} loading={loading}/>}
        </div>
      </div>
    </React.Fragment>
  )
}

export default VendorPage