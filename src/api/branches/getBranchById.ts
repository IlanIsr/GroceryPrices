import api from "@/utils/api";
import { Branch } from ".";

// Fonction pour récupérer une branche par son ID
const fetchBranchById = async (id: number): Promise<Branch> => {
  try {
    const response = await api.get<Branch>(`/branches/${id}`); // Typage de la réponse
    return response.data; // Retourne la branche
  } catch (error) {
    console.error(
      `Erreur lors de la récupération de la branche avec l'ID ${id} :`,
      error
    );
    throw error; // Vous pouvez propager l'erreur si besoin
  }
};

export { fetchBranchById };
