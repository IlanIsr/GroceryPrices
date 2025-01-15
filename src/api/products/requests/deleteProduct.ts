import api from "@/utils/api";
import { Product } from "../index.type";

interface DeleteResponse {
  message: string;
}

export async function deleteProduct({ id }: Pick<Product, "id">): Promise<DeleteResponse> {
  try {
    await api.delete<void, void>(`/products/${id}`);
    return {
      message: "Product deleted successfully"
    };
  } catch (error) {
    throw new Error(`Failed to delete product: ${error}`);
  }
} 