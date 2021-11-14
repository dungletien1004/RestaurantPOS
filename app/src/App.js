import React, { useState } from 'react';
import Foods from './components/foodList';
import Footer from './components/Footer';
import Header from './components/Header';
import Checkout from './components/CheckoutForm/Checkout/Checkout';
import { commerce } from './lib/commerce';
function App() {
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('',);

  // const refreshCart = async() => {
  //   const newCart = await commerce.cart.refresh();
  //   setCart(newCart);
  // }

  const handleCaptureCheckout = async (checkoutTokenID, newOrder) => {
    try{
      const incomingOrder = await commerce.checkout.capture(checkoutTokenID, newOrder);
      setOrder(incomingOrder);
      // refreshCart(); 
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

    {/* <Checkout 
      cart={cart} 
      order={order}
      onCaptureCheckout={handleCaptureCheckout}
      error={errorMessage}  
    /> */}
    </>
  );
}

export default App;
