import api from "@/utils/api";
import { Branch } from ".";

// Fonction pour récupérer toutes les branches
const fetchAllBranches = async (): Promise<Branch[]> => {
  try {
    const response = await api.get<Branch[]>("/branches"); // Typage de la réponse Axios
    return response.data; // Typage automatique grâce à Axios
  } catch (error) {
    console.error("Erreur lors de la récupération des branches :", error);
    throw error; // Vous pouvez propager l'erreur si besoin
  }
};

export { fetchAllBranches };
