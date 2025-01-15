import api from "@/utils/api";
import { Product, ProductOmitId } from "../index.type";

export async function updateProduct({
  id,
  name,
  code,
}: Product): Promise<Product> {
  try {
    const updateData: ProductOmitId = {
      name,
      code,
    };

    const response = await api.put<ProductOmitId, { data: Product }>(
      `/products/${id}`,
      {
        ...updateData,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(`Failed to update product: ${error}`);
  }
}
