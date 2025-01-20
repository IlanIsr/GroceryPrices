import api from "@/api/apiSettings";
import ProductLine, { ProductLineOmitId } from "../index.type";

export async function updateProductLine({
  id,
  product_id,
  branch_id,
  price,
}: ProductLine): Promise<ProductLine> {
  try {
    const updateData: ProductLineOmitId = {
      product_id,
      branch_id,
      price,
    };

    const response = await api.put<ProductLineOmitId, { data: ProductLine }>(
      `/product-lines/${id}`,
      {
        ...updateData,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(`Failed to update product line: ${error}`);
  }
}
