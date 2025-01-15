import { fetchAllBranches } from "./requests/getBranches";
import { fetchBranchById } from "./requests/getBranchById";
import { createBranch } from "./requests/createBranch";
import { deleteBranch } from "./requests/deleteBranch";
import { updateBranch } from "./requests/updateBranch";

const BRANCH_ENDPOINTS = {
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
      description: "Get a branch by id",
      apiFunction: fetchBranchById,
    },
    {
      path: "/branches",
      method: "POST",
      description: "Create a branch",
      apiFunction: createBranch,
    },
    {
      path: "/branches/:id",
      method: "DELETE",
      description: "Delete a branch",
      apiFunction: deleteBranch,
    },
    {
      path: "/branches/:id",
      method: "PUT",
      description: "Update a branch",
      apiFunction: updateBranch,
    },
  ],
};

export { BRANCH_ENDPOINTS };
