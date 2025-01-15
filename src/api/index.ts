import { fetchAllBranches, fetchBranchById } from "./branches";
import { createBranch } from "./branches/createBranch";
import { deleteBranch } from "./branches/deleteBranch";
import { updateBranch } from "./branches/updateBranch";
import { createProduct, fetchAllProducts, fetchProductById } from "./products";

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
