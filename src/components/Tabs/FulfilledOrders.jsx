import OrderCard from "../Cards/OrderCard";

const FulfilledOrders = ({orders}) => {

  return (
    <div className="order_container">
      <OrderCard orders={orders} status="Open"/>
    </div>
    );
};

export default FulfilledOrders;