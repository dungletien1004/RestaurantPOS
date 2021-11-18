// import Checkout from './components/Checkout';
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';

import Foods from './components/foodList';
import Cart from './components/Cart';
import {useState} from 'react'
function App() {
  const [cartItems, setCartItem] = useState([]);
  const onAddToCart = (product) => {
    const exist = cartItems.find(x => x.id === product.id)
    if(exist){
      setCartItems(cartItems.map(x=>x.id === product.id ? {...exist, qty : exist.qty+1} : x
        )
      );
    }
  }
  return (
    <div className="App">
      <Header />
      <Foods />
      <div className="row">
          <Cart cartItems={cartItems}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
