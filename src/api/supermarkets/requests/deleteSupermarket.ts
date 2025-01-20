import api from "@/api/apiSettings";
import { Supermarket } from "../index.type";

interface DeleteResponse {
  message: string;
}

export async function deleteSupermarket({
  id,
}: Pick<Supermarket, "id">): Promise<DeleteResponse> {
  try {
    await api.delete<void, void>(`/supermarkets/${id}`);
    return {
      message: "Supermarket deleted successfully",
    };
  } catch (error) {
    throw new Error(`Failed to delete supermarket: ${error}`);
  }
} 