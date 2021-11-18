import React from 'react';
// import Checkout from './components/Checkout';

export default function Cart(props) {
    const {cartItems} = props;
    return (
        <aside className="block col-1">
            <h2>Cart Items</h2>
            <div>
                {cartItems.length === 0 && <div>Cart is Empty</div> }
            </div>
        </aside>
        );
}
