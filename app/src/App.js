import React, { useEffect, useState } from 'react';
import Foods from './components/foodList';
import Footer from './components/Footer';
import Header from './components/Header';

import Products from './components/Products/Products'
import Checkout from './components/CheckoutForm/Checkout/Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Cart} from './components/Cart/Cart';
import { commerce } from './lib/commerce';
const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('',);

  const refreshCart = async() => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  }

  // Fetch Data Of Foods
  const fetchProducts = async () => {
    const {data} = await Foods.state.foods.list();

    setProducts(data);
  }

  // Fetch Data Of Carts
  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    setCart(cart);
  }

  const handleAddToCart = async (productId, quantity) => {
    const {cart} = await commerce.cart.add(productId, quantity);

    setCart(cart);
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const {cart} = await commerce.cart.update(productId, { quantity});

    setCart(cart);
  }

  const handleRemoveFromCart = async (dishId) => {
    const {cart} = await commerce.cart.remove(dishId);

    setCart(cart);
  }

  const handleEmptyCart = async () => {
    const {cart} = await commerce.cart.empty();
  
    setCart(cart);
  }

  useEffect(()=>{
    fetchProducts();
    fetchCart();
  },[]);

  const handleCaptureCheckout = async (checkoutTokenID, newOrder) => {
    try{
      const incomingOrder = await commerce.checkout.capture(checkoutTokenID, newOrder);
      setOrder(incomingOrder);
      refreshCart(); 
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  }


  return (
    <>
    <div className="App">
      <Header />
        <p></p>
        <Foods />
        <p></p>
      <Footer />
    </div>
    <Router>
      <div style={{ display: 'flex' }}>
        <Switch>
          <Route exact path="/">
            <Products products={products} onAddToCart={handleAddToCart} handleUpdateCartQty />
          </Route>
          <Route exact path="/cart">
            <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />
          </Route>
          <Route path="/checkout" exact>
            <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
};

export default App;
