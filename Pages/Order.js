import React,{useRef} from 'react'
import PizzaLeft from "../assest/order.jpg";
import "../Styles/order.css";
import db from "../components/Firebase";
import { addDoc, collection } from 'firebase/firestore';

function Order() {
  const nameref = useRef();
    const emailref = useRef();
    const orderref = useRef ();

    async function SubmitOrder (event) {
      event.preventDefault();

      const collectionRef = collection(db,"OrderList")
      const payload = { Fullname:nameref.current.value,
         Email:emailref.current.value,
        OrderDetails:orderref.current.value ,
     };
      await addDoc (collectionRef,payload);

    }
    return (
        <div className="order">
        <div
          className="leftSide"
          style={{ backgroundImage: `url(${PizzaLeft})` }}
        ></div>
        <div className="rightSide"> 
          <h1> Order Page</h1>
  
          <form id="order-form" onSubmit={SubmitOrder} >
            <label htmlFor="name">Full Name</label>
            <input name="name" ref={nameref} placeholder="Enter full name..." type="text" />
            <label htmlFor="email">Email</label>
            <input name="email" ref={emailref} placeholder="Enter email..." type="email" />
            <label htmlFor="message">Menu</label>
            <input name="order" ref={orderref} placeholder="Enter Menu Selected..." type="text" />
            
            <button type="submit"> Send Order</button>
          </form>
        </div>
      </div>
    );
  }

export default Order;
  