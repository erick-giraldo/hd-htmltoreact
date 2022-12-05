import React from "react";
import './assets/scss/UserMenu.scss'

const UserMenu = (props) => {
  const {showCart} = props;
  const isShowCart = showCart ? 'active' : '';
  
  return (
    <div className="menu-user">
      <div className={`show-cart ${isShowCart}`}>
        <i onclick="showCart(this)" className="cart fas fa-shopping-cart" />
        <p className="count-product">0</p>
      </div>
      <div className="dropdown">
        <a
          className="btn btn-secondary dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <div id="user-sesion" />
          <i className="fas fa-user-check" />
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" id="logout" href="#">
              cerrar sesión
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserMenu;
