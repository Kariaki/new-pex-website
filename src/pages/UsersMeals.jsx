import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UsersHeader from '../components/UsersHeader';
import MealBreakfast from '../components/Tabs/MealBreakfast';
import MealSnacks from '../components/Tabs/MealSnacks';
import MealDrinks from '../components/Tabs/MealDrinks';
import MealFood from '../components/Tabs/MealFood';
import Footer from '../components/Footer';
import OrderModal from '../components/Modals/OrderModal';


import { db } from '../firebase-config';
import { collection, query, onSnapshot } from 'firebase/firestore';

const UserMeals = () => {

  const { id } = useParams();
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


   //Get vendor items
  useEffect(() => {
    setLoading(true);
    try {
      const data = query(collection(db, "store"));
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
      <div className="users_meals-container">
        <OrderModal open={open} setOpen={setOpen} clickId={clickId} item={item}/>
          <h1>No hassle, get your meal without leaving your home</h1>
          <ul className="meals_tab-nav">
            <li className={activeTab === "tab1" ? "active active-color" : ""} onClick={handleTab1}>Breakfast</li>
            <li className={activeTab === "tab2" ? "active active-color" : ""} onClick={handleTab2}>Snacks</li>
            <li className={activeTab === "tab3" ? "active active-color" : ""} onClick={handleTab3}>Drinks</li>
            <li className={activeTab === "tab4" ? "active active-color" : ""} onClick={handleTab4}>Food</li>
          </ul>

        <div className='meals_page-tabs'>
            {activeTab === "tab1" ? 
            <MealBreakfast breakfast={breakfast} setOpen={setOpen} setClickId={setClickId} setItem={setItem} loading={loading}/> : activeTab === 'tab2' ? 
            <MealSnacks snacks={snacks} setOpen={setOpen} setClickId={setClickId} setItem={setItem} loading={loading}/> : 
            activeTab === 'tab3' ? 
            <MealDrinks  drinks={drinks} setOpen={setOpen} setClickId={setClickId} setItem={setItem} loading={loading}/> : 
            <MealFood food={food} setOpen={setOpen} setClickId={setClickId} setItem={setItem} loading={loading}/>}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default UserMeals