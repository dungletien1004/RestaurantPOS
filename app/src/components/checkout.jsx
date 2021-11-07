import React from 'react';

class Checkout extends React.Component {
    
    render() { 
    return <div className="card" style={{width: '18rem'}}>
             <img src={this.props.imgUrl} width="200" height="200" className="card-img-top" alt="Hamburger B"/>
        <div className="card-body">
          <h5 style={{fontSize: 16}} className="card-title">{this.props.name}</h5>
          <p className="card-text">Số lượng còn lại: {this.props.leftQuantity}</p>
          <p className="card-text">Đơn giá: {this.props.UnitPrice} đ</p>

          <a href="#" className="btn btn-primary">Thêm vào giỏ hàng</a>
        </div>
      </div>
      ;
    }
}
 
export default Checkout;