import OrderCard from "../Cards/OrderCard";

const CancelledOrders = ({orders}) => {

  return (
    <div className="order_container">
        <OrderCard orders={orders} status="Cancelled"/>
    </div>
    );
};

export default CancelledOrders;