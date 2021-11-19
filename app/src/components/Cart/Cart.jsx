import React from 'react';
// import Checkout from './components/Checkout';
import "./Cart.css";
export default function Cart(props) {
    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.UnitPrice, 0);
    // const taxPrice = itemsPrice * 0.14;
    // const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice;
    return (
      <aside className="blockCart col-1">
        <h2>Giỏ Hàng</h2>
        <div>
          {cartItems.length === 0 && <div>Giỏ hàng trống</div>}
          {cartItems.map((item) => (
            <div key={item.id} className="rowCart">
              <div className="col-2">{item.name}</div>
              <div className="col-2">
                <button onClick={() => onAdd(item)} className="add">
                  +
                </button>
                <button onClick={() => onRemove(item)} className="remove">
                  -
                </button>{' '}
              </div>
  
              <div className="col-2 text-right">
                {item.qty} x {item.UnitPrice.toFixed(0)}VNĐ
              </div>
            </div>
          ))}
  
          {cartItems.length !== 0 && (
            <>
              <hr></hr>
              <div className="row">
                <div className="col-2">
                  <strong>Tổng tiền</strong>
                </div>
                <div className="col-2 text-right">
                  <strong>{totalPrice.toFixed(0)}VNĐ</strong>
                </div>
              </div>
              <hr />
              <div className="row">
                <button onClick={() => alert('Implement Checkout!')}>
                  Thanh Toán
                </button>
              </div>
            </>
          )}
        </div>
      </aside>
    );
  }