import api from "@/utils/api";

export type Neighborhood = {
  id: number;
  name: string;
};

// Fonction pour récupérer toutes les Neighborhood
const fetchAllNeighborhood = async (): Promise<Neighborhood[]> => {
  try {
    const response = await api.get<Neighborhood[]>("/neighborhood"); // Typage de la réponse Axios
    return response.data; // Typage automatique grâce à Axios
  } catch (error) {
    console.error("Erreur lors de la récupération des Neighborhood :", error);
    throw error; // Vous pouvez propager l'erreur si besoin
  }
};

export { fetchAllNeighborhood };
