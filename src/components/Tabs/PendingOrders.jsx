import OrderCard from "../Cards/OrderCard";

const PendingOrders = ({orders}) => {

  return (
    <div className="order_container">
        <OrderCard orders={orders} status="Pending"/>
    </div>
    );
};

export default PendingOrders;
