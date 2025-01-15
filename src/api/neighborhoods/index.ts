import { fetchAllNeighborhoods } from "./requests/getNeighborhoods";
import { fetchNeighborhoodById } from "./requests/getNeighborhoodById";
import { createNeighborhood } from "./requests/createNeighborhood";
import { updateNeighborhood } from "./requests/updateNeighborhood";
import { deleteNeighborhood } from "./requests/deleteNeighborhood";

const NEIGHBORHOOD_ENDPOINTS = {
  tableName: "Neighborhoods",
  endpoints: [
    {
      path: "/neighborhoods",
      method: "GET",
      description: "Get all neighborhoods",
      apiFunction: fetchAllNeighborhoods,
    },
    {
      path: "/neighborhoods/:id",
      method: "GET",
      description: "Get a neighborhood by id",
      apiFunction: fetchNeighborhoodById,
    },
    {
      path: "/neighborhoods",
      method: "POST",
      description: "Create a neighborhood",
      apiFunction: createNeighborhood,
    },
    {
      path: "/neighborhoods/:id",
      method: "DELETE",
      description: "Delete a neighborhood",
      apiFunction: deleteNeighborhood,
    },
    {
      path: "/neighborhoods/:id",
      method: "PUT",
      description: "Update a neighborhood",
      apiFunction: updateNeighborhood,
    },
  ],
};

export { NEIGHBORHOOD_ENDPOINTS };
