import isEmpty from "is-empty";
import React, { useState } from "react";
import Swal from 'sweetalert2'

import {  getProducts } from "./ProductsServices";

class ProductsgController {
  static getAllProducts = async () => {
    try {
      const response = await getProducts();
      console.log("🚀 ~ file: ProductsController.js ~ line 11 ~ ProductsgController ~ getAllProducts= ~ response", response)
      if (!isEmpty(response)) {
        return response;
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
}

export default ProductsgController;
