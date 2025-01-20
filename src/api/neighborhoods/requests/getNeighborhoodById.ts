import api from "@/api/apiSettings";
import { Neighborhood } from "../index.type";

export async function fetchNeighborhoodById({ id }: Pick<Neighborhood, "id">): Promise<Neighborhood> {
  try {
    const response = await api.get<void, { data: Neighborhood }>(`/neighborhoods/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch neighborhood: ${error}`);
  }
} 