import api from "@/utils/api";
import { Neighborhood } from "../index.type";

interface DeleteResponse {
  message: string;
}

export async function deleteNeighborhood({ id }: Pick<Neighborhood, "id">): Promise<DeleteResponse> {
  try {
    await api.delete<void, void>(`/neighborhoods/${id}`);
    return { message: "Neighborhood deleted successfully" };
  } catch (error) {
    throw new Error(`Failed to delete neighborhood: ${error}`);
  }
} 