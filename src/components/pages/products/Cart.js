import React from 'react'

const Cart = () => {
  return (
    <>
      <div className="cart-products" id="products-id">
        <p className="close-btn" onclick="closeBtn()">
          X
        </p>
        <h3>Mi carrito</h3>
        <div className="card-items" />
        <h2>
          Total:$ <strong className="price-total">0</strong>
        </h2>
        <div className="btn-card">
          <button
            className="order-button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Checkout
          </button>
          <button className="empty-button">Vaciar Carrito</button>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Checkout Carrito de Compras
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="choose-payment">
                <label> Por favor seleccione el tipo de pago: </label>
                <select
                  className="form-select"
                  //aria-label="Default select example"
                  defaultValue='select example'
                >
                  <option selected disabled>
                    seleccionar
                  </option>
                  <option value="Yape">Yape</option>
                  <option value="Plin">Plin</option>
                  <option value="Tarjeta">Tarjeta</option>
                </select>
              </div>
              <div className="payment">
                <img
                  className="yape"
                  src="../assets/images/payment/yape.webp"
                  alt="logo"
                />
                <img
                  className="plin"
                  src="../assets/images/payment/plin.webp"
                  alt="logo"
                />
              </div>
              <form action="#" className="paying-card credit-card-div">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <div className="row">
                      <div className="col-md-12">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Ingresar Número de Tarjeta"
                          defaultValue="4557 2598 4815 4935"
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3 col-sm-3 col-xs-3">
                        <span className="help-block text-muted small-font">
                          Mes
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="MM"
                          defaultValue={10}
                          disabled
                        />
                      </div>
                      <div className="col-md-3 col-sm-3 col-xs-3">
                        <span className="help-block text-muted small-font">
                          Año
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="YY"
                          defaultValue={2027}
                          disabled
                        />
                      </div>
                      <div className="col-md-3 col-sm-3 col-xs-3">
                        <span className="help-block text-muted small-font">
                          CCV
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="CCV"
                          defaultValue="***"
                          disabled
                        />
                      </div>
                      <div className="col-md-3 col-sm-3 col-xs-3">
                        <img
                          src="/assets/images/payment/tarjeta.webp"
                          className="img-rounded"
                          width="90px"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 pad-adjust">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Nombre del Titular de la tarjeta"
                          defaultValue="Erick Giraldo Muñoz"
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 pad-adjust">
                        <div className="checkbox">
                          <label>
                            <input
                              type="checkbox"
                              defaultChecked
                              className="text-muted"
                            />
                            Guardar detalles para pagos rápidos
                            <a href="#"> aprender cómo ?</a>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <p className="info-payment">
                Cuando haya realiazdo el pago por favor dar click en Aceptar
              </p>
              <button type="button" className="btn btn-pay-checkout">
                <div className="spinnerPay" />
                <div className="btn-pay-txt">Aceptar</div>
                <div className="btn-card-txt">Pagar</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart