import api from "@/api/apiSettings";
import { Supermarket } from "../index.type";
// Fonction pour récupérer toutes les branches
const fetchAllSupermarkets = async (): Promise<Supermarket[]> => {
  try {
    const response = await api.get<Supermarket[]>("/supermarkets"); // Typage de la réponse Axios
    return response.data; // Typage automatique grâce à Axios
  } catch (error) {
    console.error("Erreur lors de la récupération des branches :", error);
    throw error; // Vous pouvez propager l'erreur si besoin
  }
};

export { fetchAllSupermarkets };
