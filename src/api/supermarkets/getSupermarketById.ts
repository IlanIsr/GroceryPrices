import api from "@/utils/api";
import { Supermarket } from "./getSupermarkets";

// Fonction pour récupérer une Supermarkete par son ID
const fetchSupermarketById = async (id: number): Promise<Supermarket> => {
  try {
    const response = await api.get<Supermarket>(`/supermarkets/${id}`); // Typage de la réponse
    return response.data; // Retourne la Supermarkete
  } catch (error) {
    console.error(
      `Erreur lors de la récupération de la Supermarkete avec l'ID ${id} :`,
      error
    );
    throw error; // Vous pouvez propager l'erreur si besoin
  }
};

export { fetchSupermarketById };
