import { fetchAllProductLines } from "./requests/getProductLines";
import { fetchProductLineById } from "./requests/getProductLineById";
import { createProductLine } from "./requests/createProductLine";
import { deleteProductLine } from "./requests/deleteProductLine";
import { updateProductLine } from "./requests/updateBranch";

const PRODUCT_LINE_ENDPOINTS = {
  tableName: "product_lines",
  endpoints: [
    {
      path: "/product-lines",
      method: "GET",
      description: "Get all product lines",
      apiFunction: fetchAllProductLines,
    },
    {
      path: "/product-lines/:id",
      method: "GET",
      description: "Get a product line by id",
      apiFunction: fetchProductLineById,
    },
    {
      path: "/product-lines",
      method: "POST",
      description: "Create a product line",
      apiFunction: createProductLine,
    },
    {
      path: "/product-lines/:id",
      method: "DELETE",
      description: "Delete a product line",
      apiFunction: deleteProductLine,
    },
    {
      path: "/product-lines/:id",
      method: "PUT",
      description: "Update a product line",
      apiFunction: updateProductLine,
    },
  ],
};

export { PRODUCT_LINE_ENDPOINTS };
