import api from "@/api/apiSettings";
import { Branch } from "../index.type";

interface DeleteResponse {
  message: string;
}

export async function deleteBranch({ id }: Pick<Branch, "id">): Promise<DeleteResponse> {
  try {
    await api.delete<void, void>(`/branches/${id}`);
    return {
      message: "Branch deleted successfully"
    };
  } catch (error) {
    throw new Error(`Failed to delete branch: ${error}`);
  }
} 