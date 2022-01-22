import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const OrderModal = ({open, setOpen, orderItems, status}) => {
  console.log(orderItems)
  console.log(status)
  return (
    <Modal open={open} onClose={()=>setOpen(false)} center>
      <div className='order_modal-container'>
        <div className="order_modal-heading">
          <span><h5 className="details">Order #222</h5><span className="order_card-date">{orderItems.date}</span></span>
        <h5 className="items">{orderItems.itemsNumber}</h5>
        </div>
        <p>Order Card Modal Content goes into this space. <br /> <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Error expedita deleniti nemo dolorem deserunt necessitatibus dolor unde perspiciatis eaque! Exercitationem, officiis. Natus voluptas molestias deserunt repellendus eius, assumenda optio quia?</p>

        <button onClick={() => setOpen(false)}>Cancel order</button>
        <button onClick={() => setOpen(false)}>Fulfill order</button>
      </div>
    </Modal>
    );
};

export default OrderModal;
