import api from "@/utils/api";
import { Neighborhood } from ".";

export async function fetchAllNeighborhoods(): Promise<Neighborhood[]> {
  try {
    const response = await api.get<void, { data: Neighborhood[] }>("/neighborhoods");
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch neighborhoods: ${error}`);
  }
} 