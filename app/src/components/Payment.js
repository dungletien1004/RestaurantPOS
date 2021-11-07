import React from "react";
import { useState } from "react"
import "./Payment.css"
import CartItem from "./CartItem"

import Checkout from './checkout';

const Payment = function (props) {
  const [cart, setCart] = useState(0);
  // const [listCart, setListCar] = useState([]);
  const [totalPrice, settotalPrice] = useState(0);
  const name = (data) => {
    setCart(data);
  }
  const handleCountDown1 = (data, price) => {
    // cart = cart+1;
    if (data === 1) {
      setCart(cart + 1);
      settotalPrice(totalPrice + price)
    }
    else {
      setCart(cart - 1);
      settotalPrice(totalPrice - price)
    }
  }


  return (
    <div className="outterlayer">
      <div className="header">
        <p className="cartTitle"><i className="fas fa-shopping-cart"></i> Your Cart ({cart})</p>
        {/* <button className = "dineBtn">DINE IN</button> */}
        <button type="button" className="btn btn-secondary dineBtn">DINE IN</button>
      </div>
      <div className="listcart">
        <CartItem index={1}
          name={"Ham"}
          cart={handleCountDown1}
          price={10000}
        />
        <CartItem index={2}
          name={"Bur"}
          cart={handleCountDown1}
          price={12000}
        />

        <CartItem index={3}
          name="Ger"
          cart={handleCountDown1}
          price={15000}
        />

      </div>
      <div className="total">
        <b style={{ color: "green" }}>Total:</b>
        <b style={{ color: "red", float: "right" }}>{totalPrice}</b>


      </div>
      <button type="button" className="btn btn-danger paybtn ">PAYMENT</button>
      <Checkout />
    </div>
  )
}

export default Payment;