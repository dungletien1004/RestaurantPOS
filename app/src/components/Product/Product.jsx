import React from 'react';
import './Product.css';
export default function Product(props) {
    const {product, onAdd} = props;
    return (
      <div className = "Item">
        <img src={product.imgUrl} className="small" width="190px" height="190px" alt={product.name} />
        <h3 >{product.name}</h3>
        <div>Số lượng còn lại: {product.leftQuantity}</div>
        <div>Đơn giá: {product.UnitPrice} VNĐ</div>
        <div>
          <button onClick={()=>{onAdd(product)}}>Thêm vào giỏ hàng</button> 
        </div>
      </div>  
    );
}

