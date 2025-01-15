import api from "@/utils/api";
import { Neighborhood } from "./getNeighborhoods";

// Fonction pour récupérer une Neighborhood par son ID
const fetchNeighborhoodById = async (id: number): Promise<Neighborhood> => {
  try {
    const response = await api.get<Neighborhood>(`/neighborhood/${id}`); // Typage de la réponse
    return response.data; // Retourne la Neighborhood
  } catch (error) {
    console.error(
      `Erreur lors de la récupération de la Neighborhood avec l'ID ${id} :`,
      error
    );
    throw error; // Vous pouvez propager l'erreur si besoin
  }
};

export { fetchNeighborhoodById };
