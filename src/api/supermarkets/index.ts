import { fetchAllSupermarkets } from "./requests/getSupermarkets";
import { fetchSupermarketById } from "./requests/getSupermarketById";
import { createSupermarket } from "./requests/createSupermarket";
import { updateSupermarket } from "./requests/updateSupermarket";
import { deleteSupermarket } from "./requests/deleteSupermarket";

const SUPMARKET_ENDPOINTS = {
  tableName: "Supermarkets",
  endpoints: [
    {
      path: "/supermarkets",
      method: "GET",
      description: "Get all supermarkets",
      apiFunction: fetchAllSupermarkets,
    },
    {
      path: "/supermarkets/:id",
      method: "GET",
      description: "Get a supermarket by id",
      apiFunction: fetchSupermarketById,
    },
    {
      path: "/supermarkets",
      method: "POST",
      description: "Create a supermarket",
      apiFunction: createSupermarket,
    },
    {
      path: "/supermarkets/:id",
      method: "DELETE",
      description: "Delete a supermarket",
      apiFunction: deleteSupermarket,
    },
    {
      path: "/supermarkets/:id",
      method: "PUT",
      description: "Update a supermarket",
      apiFunction: updateSupermarket,
    },
  ],
};

export { SUPMARKET_ENDPOINTS };