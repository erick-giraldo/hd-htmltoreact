import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/logo.webp";
import menuLite from './assets/images/menu-lite.webp';
import './assets/scss/header.scss'

export const Nav = () => {
  return (
    <>
      <header className="col-lg-2 col-md-12 menu">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <nav className="menu-container">
          <input type="checkbox" name="menuLite" id="menuLite" hidden />
          <ul>
            <li>
              <NavLink  to="./">
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="./AboutUs">Nosotros</NavLink>
            </li>
            <li>
              <NavLink to="./Products">Productos</NavLink>
            </li>
            <li>
              <NavLink to="./Blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="./Contact">contacto</NavLink>
            </li>
          </ul>
          <label htmlFor="menuLite">
            <img
              className="menuIcon"
              src={menuLite}
              alt="menuLite"
            />
          </label>
        </nav>
      </header>
    </>
  );
};
