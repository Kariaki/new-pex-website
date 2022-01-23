import logogo from '../../assets/logogo.jpg';

const OrderModalList = () => {
  return (
    <div className="order_list">
      <div className="order_list-item">
        <img src={logogo} alt="logogo" style={{height: '40px', width: '40px'}}/>
        <div className="order_list-detail">
          <h5>Rice</h5>
          <p>#2000</p>
        </div>
      </div>
      <div className="order_list-qty">
        <p>Qty : 1</p>
      </div>
    </div>
  );
};

export default OrderModalList;
