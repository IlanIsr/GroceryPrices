import api from "@/api/apiSettings";
import { Supermarket, SupermarketOmitId } from "../index.type";

export async function updateSupermarket({
  id,
  name,
}: Supermarket): Promise<Supermarket> {
  try {
    const updateData: SupermarketOmitId = {
      name,
    };

    const response = await api.put<SupermarketOmitId, { data: Supermarket }>(
      `/supermarkets/${id}`,
      {
        ...updateData,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(`Failed to update supermarket: ${error}`);
  }
}
