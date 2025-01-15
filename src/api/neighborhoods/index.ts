import { fetchAllNeighborhoods } from "./getNeighborhoods";
import { fetchNeighborhoodById } from "./getNeighborhoodById";
import { createNeighborhood } from "./createNeighborhood";
import { updateNeighborhood } from "./updateNeighborhood";
import { deleteNeighborhood } from "./deleteNeighborhood";

export interface Neighborhood {
  id: string;
  name: string;
}

export type NeighborhoodOmitId = Omit<Neighborhood, "id">;

export {
  fetchAllNeighborhoods,
  fetchNeighborhoodById,
  createNeighborhood,
  updateNeighborhood,
  deleteNeighborhood
}; 