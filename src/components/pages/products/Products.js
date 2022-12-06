import React, { useEffect, useState } from "react";
import ProductsgController from "./ProductsController";
import { Link } from "react-router-dom";
import isEmpty from "is-empty";
import Swal from "sweetalert2";

import "./assets/scss/Products.scss";
import UserMenu from "../../userMenu/UserMenu";
import Cart from "./Cart";
import TabsContent from "./TabsContent";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const result = await ProductsgController.getAllProducts();
      if (!isEmpty(result)) {
        setProducts(result);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        showConfirmButton: false,
        title: "Oops... no se pudo obtener data",
        text: `${error}`,
      });
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const listItem = (array) => {
    return array.map((e) => (
      <>
        <div
          className="card col-lg-2 col-md-6 col-sm-12"
          style={{ width: "20rem" }}
        >
          <button
            type="button"
            className="btn-none"
            data-bs-toggle="modal"
            data-bs-target="#sportster"
          >
            {" "}
            <img src={e.image} className="d-block w-100" alt={e.name} />
          </button>
          <div className="card-body">
            <h5 className="card-title card-name">{e.name}</h5>
            <p className="card-text">{e.description}</p>
            <div className="card-inv">
              <p className="card-title card-price">$ {e.price}</p>
              <p className="card-title card-stock">Stock: {e.stock}</p>
            </div>
            <button
              type="button"
              className="btn btn-outline-dark"
              data-bs-target="#sportster"
              data-id={e.id}
            >
              Agregar a Carrito
            </button>
          </div>
        </div>
        {/* Modal */}
        <div
          className="modal fade"
          id="sportster"
          tabIndex={-1}
          aria-labelledby="exampleModalLabelSportster"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabelSportster">
                  {e.name}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                {/* Carousel */}
                <div
                  id="sportsterDark"
                  className="carousel carousel-dark slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#sportsterDark"
                      data-bs-slide-to={0}
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    />
                    <button
                      type="button"
                      data-bs-target="#sportsterDark"
                      data-bs-slide-to={1}
                      aria-label="Slide 2"
                    />
                    <button
                      type="button"
                      data-bs-target="#sportsterDark"
                      data-bs-slide-to={2}
                      aria-label="Slide 3"
                    />
                  </div>
                  <div className="carousel-inner">
                    <div
                      className="carousel-item active"
                      data-bs-interval={10000}
                    >
                      <img
                        src={e.image}
                        className="d-block w-100"
                        alt={e.name}
                      />
                    </div>
                    <div className="carousel-item" data-bs-interval={2000}>
                      <img
                        src={e.image}
                        className="d-block w-100"
                        alt={e.name}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={e.image}
                        className="d-block w-100"
                        alt={e.name}
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#sportsterDark"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      />
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#sportsterDark"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      />
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="modal-footer" />
            </div>
          </div>
        </div>
      </>
    ));
  };

  const listProducts = (items) => {
    return (
      <div>
        <h1>Modelos</h1>
        <div className="productos-container">
          {items.map((products) => (
            <div>
              <p className="p-titulo">{products.title}</p>
              <p>Descubre algunos de los modelos más recientes.</p>
              <div className="row productos-section">
                {listItem(products.data)}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <main className="col-lg-10 col-md-12 col-sm-12 main-container">
      <UserMenu showCart={true} />
      <Cart />
      <div className="referencia">
        <nav aria-label="breadcrumb">
          <ol className="descolgado breadcrumb">
            <li className="breadcrumb-item">
            <li className="breadcrumb-item"><Link to='/'>Inicio</Link></li>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Productos
            </li>
          </ol>
        </nav>
      </div>
      <div className="content-product">
        <div className="productos-contenido">
          <TabsContent />
          {listProducts(products)}
          <div />
        </div>
      </div>
    </main>
  );
};

export default Products;
