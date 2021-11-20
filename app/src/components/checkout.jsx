import React from 'react';
import CreditCardForm from './components/CreditCardForm';
import Footer from './components/Footer';
import Header from './components/Header';

class Checkout extends React.Component {
    render() { 
    return (
    <div>
      <Footer />
      <CreditCardForm/>
      <Header />
    </div>
    )
    }
}
 
export default Checkout;