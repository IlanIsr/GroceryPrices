import api from "@/api/apiSettings";
import { Product } from "../index.type";

// Fonction pour récupérer toutes les products
const fetchAllProducts = async (): Promise<Product[]> => {
  try {
    const response = await api.get<Product[]>("/products"); // Typage de la réponse Axios
    return response.data; // Typage automatique grâce à Axios
  } catch (error) {
    console.error("Erreur lors de la récupération des products :", error);
    throw error; // Vous pouvez propager l'erreur si besoin
  }
};

export { fetchAllProducts };
