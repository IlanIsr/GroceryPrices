import api from "@/utils/api";
import { Neighborhood, NeighborhoodOmitId } from ".";

export async function updateNeighborhood({ id, name }: Neighborhood): Promise<Neighborhood> {
  try {
    const updateData: NeighborhoodOmitId = { name };
    const response = await api.put<NeighborhoodOmitId, { data: Neighborhood }>(`/neighborhoods/${id}`, updateData);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to update neighborhood: ${error}`);
  }
} 