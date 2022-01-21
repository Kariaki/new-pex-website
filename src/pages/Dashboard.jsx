import CountsCard from "../components/Cards/CountsCard";
import PageHeader from "../components/PageHeader";
import FiveColums from "../components/Tables/FiveColums";
import MealCard from '../components/Cards/MealCard';
import { totalCounts, dashboardData, mostOrderedMeal } from "../Data/db";

const Dashboard = () => {

  const handleViewAll = () => {
    console.log('View all')
  }

  const handleLoadMore = () => {
    console.log('Load more...')
  }

  return (
    <div className="container">
     <PageHeader title="Dashboard" subTitle="Wednesday, 23rd December 2021"/>
     <div className="dashboard_content content">
       <div className="dashboard_left-content">
         <div className="dashboard-cards">
            {totalCounts.map(card => (
              <CountsCard card={card} key={card.id}/>
            ))}
          </div>
          <div className="dashboard-table">
            <div>
              <h4>Recent orders</h4>
              <button className="btn" onClick={handleViewAll}>View all</button>
            </div>
            <FiveColums col1="Order" col2="Customer" col3="Amount" col4="Time" col5="Status" data={dashboardData}/>
          </div>
       </div>
       <div className="dashboard_right-content">
         <h4>Most ordered Meal</h4>
         {mostOrderedMeal.map(meal => (
           <MealCard meal={meal} key={meal.id}/>
         ))}
         <button className="btn" onClick={handleLoadMore}>Load more</button>
       </div>
     </div>
      
    </div>
  )
}
export default Dashboard
