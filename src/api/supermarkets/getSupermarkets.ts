import api from "@/utils/api";

export type Supermarket = {
  id: number;
  name: string;
};

// Fonction pour récupérer toutes les Supermarket
const fetchAllSupermarket = async (): Promise<Supermarket[]> => {
  try {
    const response = await api.get<Supermarket[]>("/supermarkets"); // Typage de la réponse Axios
    return response.data; // Typage automatique grâce à Axios
  } catch (error) {
    console.error("Erreur lors de la récupération des Supermarket :", error);
    throw error; // Vous pouvez propager l'erreur si besoin
  }
};

export { fetchAllSupermarket };
