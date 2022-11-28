import React from "react";
import bgBanner from "./assets/images/Harley-Davidson-bg-1.webp";
import "./assets/scss/Home.scss";

export const Home = () => {
  return (
    <>
      <main className="col-lg-10 col-md-12 main">
        <div className="menu-user">
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
        <div className="contenido">
          <div className="row container-both">
            <div className="col-lg-6 col-md-12 contenido-container">
              <h1>Harley-Davidson®</h1>
              <p>Lima</p>
              <ul>
                <li>
                  Realizamos sueños inspirados por las carreteras del mundo.
                  Creamos experiencias extraordinarias para los amantes de
                  nuestra marca.
                </li>
                <li>
                  Ofrecemos motocicletas nuevas, ropa y accesorios, partes,
                  servicio técnico autorizado
                </li>
                <li>
                  Aprendemos de la experiencia y celebramos nuestros éxitos.
                </li>
              </ul>
              <div className="btn-container">
                <button
                  className="btn-hover btn-inicio"
                  onclick="location.href='./contacto.html#formulario'"
                >
                  Contacto
                </button>
              </div>
            </div>
            <div className="container col-lg-6 col-md-12 contenido-imagen">
              <img
                className="img-fluid"
                src={bgBanner}
                alt="Harley-Davidson-bg-1"
                width="600px"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};