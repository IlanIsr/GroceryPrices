import { fetchAllBranches, fetchBranchById } from "./branches";
import { createBranch } from "./branches/createBranch";
import { deleteBranch } from "./branches/deleteBranch";
import { updateBranch } from "./branches/updateBranch";
import {
  fetchNeighborhoodById,
  createNeighborhood,
  updateNeighborhood,
  deleteNeighborhood,
  fetchAllNeighborhoods,
} from "./neighborhoods";
import { createProduct, fetchAllProducts, fetchProductById } from "./products";
import {
  createSupermarket,
  deleteSupermarket,
  fetchAllSupermarkets,
  fetchSupermarketById,
  updateSupermarket,
} from "./supermarkets";

export interface EndpointParameter {
  name: string;
  type: string;
  required: boolean;
  description: string;
}

export interface Endpoint {
  path: string;
  method: string;
  description: string;
  apiFunction: (...args: any[]) => Promise<any>;
  parameters?: EndpointParameter[];
}

export interface TableEndpoints {
  tableName: string;
  endpoints: Endpoint[];
}

export const AVAILABLE_ENDPOINTS: TableEndpoints[] = [
  {
    tableName: "Branches",
    endpoints: [
      {
        path: "/branches",
        method: "GET",
        description: "Get all branches",
        apiFunction: fetchAllBranches,
      },
      {
        path: "/branches/:id",
        method: "GET",
        description: "Get branch by ID",
        apiFunction: fetchBranchById,
        parameters: [
          {
            name: "id",
            type: "number",
            required: true,
            description: "Branch ID",
          },
        ],
      },
      {
        path: "/branches",
        method: "POST",
        description: "Create new branch",
        apiFunction: createBranch,
        parameters: [
          {
            name: "address",
            type: "string",
            required: true,
            description: "Branch address",
          },
          {
            name: "neighborhood_id",
            type: "number",
            required: true,
            description: "Neighborhood ID",
          },
          {
            name: "supermarket_id",
            type: "number",
            required: true,
            description: "Supermarket ID",
          },
        ],
      },
      {
        path: "/branches/:id",
        method: "PUT",
        description: "Update branch",
        apiFunction: updateBranch,
        parameters: [
          {
            name: "id",
            type: "number",
            required: true,
            description: "Branch ID",
          },
          {
            name: "address",
            type: "string",
            required: true,
            description: "Branch address",
          },
          {
            name: "neighborhood_id",
            type: "number",
            required: true,
            description: "Neighborhood ID",
          },
          {
            name: "supermarket_id",
            type: "number",
            required: true,
            description: "Supermarket ID",
          },
        ],
      },
      {
        path: "/branches/:id",
        method: "DELETE",
        description: "Delete branch",
        apiFunction: deleteBranch,
        parameters: [
          {
            name: "id",
            type: "number",
            required: true,
            description: "Branch ID",
          },
        ],
      },
    ],
  },
  {
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
        description: "Get neighborhood by ID",
        apiFunction: fetchNeighborhoodById,
        parameters: [
          {
            name: "id",
            type: "number",
            required: true,
            description: "Neighborhood ID",
          },
        ],
      },
      {
        path: "/neighborhoods",
        method: "POST",
        description: "Create new neighborhood",
        apiFunction: createNeighborhood,
        parameters: [
          {
            name: "name",
            type: "string",
            required: true,
            description: "Neighborhood name",
          },
        ],
      },
      {
        path: "/neighborhoods/:id",
        method: "PUT",
        description: "Update neighborhood",
        apiFunction: updateNeighborhood,
        parameters: [
          {
            name: "id",
            type: "number",
            required: true,
            description: "Neighborhood ID",
          },
          {
            name: "name",
            type: "string",
            required: true,
            description: "Neighborhood name",
          },
        ],
      },
      {
        path: "/neighborhoods/:id",
        method: "DELETE",
        description: "Delete neighborhood",
        apiFunction: deleteNeighborhood,
        parameters: [
          {
            name: "id",
            type: "number",
            required: true,
            description: "Neighborhood ID",
          },
        ],
      },
    ],
  },
  {
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
        description: "Get supermarket by ID",
        apiFunction: fetchSupermarketById,
        parameters: [
          {
            name: "id",
            type: "number",
            required: true,
            description: "Supermarket ID",
          },
        ],
      },
      {
        path: "/supermarkets",
        method: "POST",
        description: "Create new supermarket",
        apiFunction: createSupermarket,
        parameters: [
          {
            name: "name",
            type: "string",
            required: true,
            description: "Supermarket name",
          },
        ],
      },
      {
        path: "/supermarkets/:id",
        method: "PUT",
        description: "Update supermarket",
        apiFunction: updateSupermarket,
        parameters: [
          {
            name: "id",
            type: "number",
            required: true,
            description: "Supermarket ID",
          },
          {
            name: "name",
            type: "string",
            required: true,
            description: "Supermarket name",
          },
        ],
      },
      {
        path: "/supermarkets/:id",
        method: "DELETE",
        description: "Delete supermarket",
        apiFunction: deleteSupermarket,
        parameters: [
          {
            name: "id",
            type: "number",
            required: true,
            description: "Supermarket ID",
          },
        ],
      },
    ],
  },
  {
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
        description: "Get product by ID",
        apiFunction: fetchProductById,
      },
      {
        path: "/products",
        method: "POST",
        description: "Create new product",
        apiFunction: createProduct,
      },
      // { path: "/products/:id", method: "DELETE", description: "Delete product", apiFunction: deleteProduct },
    ],
  },
];
