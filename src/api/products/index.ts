import { fetchAllProducts } from "./requests/getProducts";
import { fetchProductById } from "./requests/getProductById";
import { createProduct } from "./requests/createProduct";
import { deleteProduct } from "./requests/deleteProduct";
import { updateProduct } from "./requests/updateProduct";

const PRODUCT_ENDPOINTS = {
  tableName: "Products",
  endpoints: [
    {
      path: "/products",
      method: "GET",
      description: "Get all products",
      apiFunction: fetchAllProducts,
    },
    {
      path: "/products/:id",
      method: "GET",
      description: "Get a product by id",
      apiFunction: fetchProductById,
    },
    {
      path: "/products",
      method: "POST",
      description: "Create a product",
      apiFunction: createProduct,
    },
    {
      path: "/products/:id",
      method: "DELETE",
      description: "Delete a product",
      apiFunction: deleteProduct,
    },
    {
      path: "/products/:id",
      method: "PUT",
      description: "Update a product",
      apiFunction: updateProduct,
    },
  ],
};

export { PRODUCT_ENDPOINTS };
