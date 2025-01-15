import { fetchAllBranches } from "./getBranches";
import { fetchBranchById } from "./getBranchById";

type Branch = {
  address: string;
  id: number;
  neighborhood_id: number;
  supermarket_id: number;
};
type BranchOmitId = Omit<Branch, "id">;

export { fetchAllBranches, fetchBranchById };
export type { Branch, BranchOmitId };
