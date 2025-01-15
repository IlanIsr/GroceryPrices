import api from "@/utils/api";
import ProductLine from "../index.type";

interface DeleteResponse {
  message: string;
}

export async function deleteProductLine({ id }: Pick<ProductLine, "id">): Promise<DeleteResponse> {
  try {
    await api.delete<void, void>(`/product-lines/${id}`);
    return {
      message: "Branch deleted successfully"
    };
  } catch (error) {
    throw new Error(`Failed to delete branch: ${error}`);
  }
} 