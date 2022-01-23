import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import OrderModalList from '../Cards/OrderModalList';
import Button from '../Button';
import { closeIcon } from '../utils/closeIcon';

const OrderModal = ({open, setOpen, orderItems, status}) => {
  // console.log(orderItems)
  // console.log(status)

  const handleCancelOrder = () => {
    setOpen(false)
  }

  const handleFulfilOrder = () => {
    setOpen(false)
  }

  return (
    <Modal open={open} onClose={()=>setOpen(false)} center closeIcon={closeIcon}>
      <div className='order_modal'>
        <div className="order_modal-heading">
          <div className="details">
            <h5>Order #222</h5>
            <p className='text-small-gray'>23rd December 2021</p>
          </div>
          <Button text="Pending" bgColor="green" color="white"/>
        </div>
        <div className="order_modal-delivery-detail">
            <div>
              <h5>John Doe</h5>
              <p className='text-small-gray'>Customer</p>
            </div>
            <div>
              <h5>35 Osiri, Yenagoa</h5>
              <p className='text-small-gray'>Address</p>
            </div>
            <div>
              <h5>09012345677</h5>
              <p className='text-small-gray'>Phone Number</p>
            </div>
            <div>
              <h5>johndoe@gmail.com</h5>
              <p className='text-small-gray'>Email</p>
            </div>
        </div>
        <div className="order_modal-delivery-note">
          <p>When you get to my address please call, also get sprite not coke</p>
          <p className='text-small-gray'>Note/Instructions</p>
        </div>
        <div className="order_modal-list-container custom-scrollbar">
          <OrderModalList />
          <OrderModalList />
          <OrderModalList />
          <OrderModalList />
          <OrderModalList />
          <OrderModalList />
          <OrderModalList />
          <OrderModalList />
          <OrderModalList />
          <OrderModalList />
          <OrderModalList />
          <OrderModalList />
          <OrderModalList />
          <OrderModalList />
        </div>
        <div className="order_modal-footer">
          <p>Total: <span>#6350</span></p>
          <div className="order_modal-footer-btn">
            <Button text="Cancel order" bgColor="transparent" color="black" onClick={handleCancelOrder}/>
            <Button text="Fulfill order" bgColor="green" color="white" onClick={handleFulfilOrder}/>
          </div>
        </div>
      </div>
    </Modal>
    );
};

export default OrderModal;
