import api from "@/api/apiSettings";
import { Supermarket, SupermarketOmitId } from "../index.type";

export async function createSupermarket({
  name,
}: SupermarketOmitId): Promise<Supermarket> {
  try {
    const newSupermarket: SupermarketOmitId = {
      name,
    };
    const response = await api.post<SupermarketOmitId, { data: Supermarket }>(
      "/supermarkets",
      {
        ...newSupermarket,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(`Failed to create supermarket: ${error}`);
  }
}
