import React from 'react';
import Product from '../Product/Product';
import "./Main.css";
export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <main className="blockMain col-2">
      <h2>Menu</h2>
      <div className="row">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}
