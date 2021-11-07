import React from "react";
import { useState } from "react"
import "./CartItem.css"
const CartItem = ({index, name, cart, price}) => {
    const [count, setCount] = useState(0);
    const [tax] = useState(1.1);
    const handleCountDown = () => {
        if (count > 0) {
            setCount(count - 1);
            cart(0,price * tax);
        }
    }
    const handleCountUp = () => {

        setCount(count + 1);
        cart(1,price * tax);
    }

    return (
        <div className="Itemlayer">
            <img className="Itemimg" src="https://www.monngon.tv/wp-content/uploads/2020/09/8502d473305654eb561cece1c2d0b6e2-lam-banh-hamburger-s.jpg" alt="Girl in a jacket" />
            <div className="info">
                <p className="Itemname">{index}. {name}</p>
                <div className="handle">
                    <button type="button" className="btn btn-outline-primary" onClick = {handleCountDown}>-</button>
                    <b>{count}</b>
                    <button type="button" className="btn btn-outline-danger" onClick = {handleCountUp}>+</button>
                    <span>
                        <b style={{ color: "red" }}>{price}</b>
                        <br />
                        <b>After Tax: {Math.round(tax * 100 - 100)}% = {Math.round(price * tax)}</b>
                        {/* <button onClick={handleCount(0)}>+</button> */}
                    </span>
                </div>
            </div>
        </div>

    )
}

export default CartItem;