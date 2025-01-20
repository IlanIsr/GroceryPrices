import api from "@/api/apiSettings";
import { Neighborhood, NeighborhoodOmitId } from "../index.type";

export async function createNeighborhood({ name }: NeighborhoodOmitId): Promise<Neighborhood> {
  try {
    const newNeighborhood: NeighborhoodOmitId = { name };
    const response = await api.post<NeighborhoodOmitId, { data: Neighborhood }>("/neighborhoods", newNeighborhood);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to create neighborhood: ${error}`);
  }
} 