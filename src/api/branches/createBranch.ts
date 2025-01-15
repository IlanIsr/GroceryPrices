import api from "@/utils/api";
import { Branch, BranchOmitId } from ".";

export async function createBranch({
  address,
  neighborhood_id,
  supermarket_id,
}: BranchOmitId): Promise<Branch> {
  try {
    const newBranch: BranchOmitId = {
      address,
      neighborhood_id,
      supermarket_id,
    };

    const response = await api.post<BranchOmitId, { data: Branch }>(
      "/branches",
      {
        ...newBranch,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(`Failed to create branch: ${error}`);
  }
}
