import React, { Component } from 'react'

export default class Header extends Component {


    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a href=""><img src="img/restaurant.png" alt=""
                                width="40" height="40" /></a>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Trang chủ <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/giohang">Giỏ Hàng</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/donhang">Đơn Hàng</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/hoso">Hồ sơ</a>
                </li>
              </ul>
              <form className="form-inline">
                <button  className="btn btn-outline-success" type="button">
                    <a href="/logout" className="header-btn ml-30" onClick={(e) => {
                                                if (!window.confirm('Bạn chắc chắn Đăng xuất?')) e.preventDefault();
                                            }}>
                        Đăng xuất
                    </a>
                </button>
            </form>
            </div>
          </nav>
        )
    }
}
