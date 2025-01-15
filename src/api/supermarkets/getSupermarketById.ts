import api from "@/utils/api";
import { Supermarket } from ".";

// Fonction pour récupérer une branche par son ID
const fetchSupermarketById = async ({ id }: Props): Promise<Supermarket> => {
  console.log("id", id);
  try {
    const response = await api.get<Supermarket>(`/supermarkets/${id}`); // Typage de la réponse
    return response.data; // Retourne la branche
  } catch (error) {
    console.error(
      `Erreur lors de la récupération de la branche avec l'ID ${id} :`,
      error
    );
    throw error; // Vous pouvez propager l'erreur si besoin
  }
};

export { fetchSupermarketById };

interface Props {
  id: number;
}
