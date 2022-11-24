import React from "react";
import logo from "../assets/images/logo.webp";
import menuLite from './assets/images/menu-lite.webp';
import './assets/scss/header.scss'

export const Nav = () => {
  return (
    <>
      <header className="col-lg-2 col-md-12 menu">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <nav className="menu-container">
          <input type="checkbox" name="menuLite" id="menuLite" hidden />
          <ul>
            <li>
              <a className="active" href="./start.html">
                Inicio
              </a>
            </li>
            <li>
              <a href="./nosotros.html">Nosotros</a>
            </li>
            <li>
              <a href="./productos.html">Productos</a>
            </li>
            <li>
              <a href="./blog.html">Blog</a>
            </li>
            <li>
              <a href="./contacto.html">contacto</a>
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
