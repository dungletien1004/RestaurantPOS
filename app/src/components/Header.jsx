import React, { Component } from 'react'

export default class Header extends Component {


    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a href=""><img src="img/restaurant.png" alt=""
                                width="40" height="40" /></a>
          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="/">Trang chủ <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/giohang">Giỏ Hàng</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/donhang">Đơn Hàng</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/hoso">Hồ sơ</a>
                </li>
              </ul>
              <form class="form-inline">
                <button  class="btn btn-outline-success" type="button">
                    <a href="/logout" class="header-btn ml-30" onClick={(e) => {
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
