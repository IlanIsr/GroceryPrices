import api from "@/api/apiSettings";
import { Branch, BranchOmitId } from "../index.type";

export async function updateBranch({
  id,
  address,
  neighborhood_id,
  supermarket_id,
}: Branch): Promise<Branch> {
  try {
    const updateData: BranchOmitId = {
      address,
      neighborhood_id,
      supermarket_id,
    };

    const response = await api.put<BranchOmitId, { data: Branch }>(
      `/branches/${id}`,
      {
        ...updateData,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(`Failed to update branch: ${error}`);
  }
}
