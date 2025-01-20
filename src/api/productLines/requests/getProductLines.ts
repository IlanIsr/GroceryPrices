import api from "@/api/apiSettings";
import ProductLine from "../index.type";

// Fonction pour récupérer toutes les products
const fetchAllProductLines = async (): Promise<ProductLine[]> => {
  try {
    const response = await api.get<ProductLine[]>("/product-lines"); // Typage de la réponse Axios
    return response.data; // Typage automatique grâce à Axios
  } catch (error) {
    console.error("Erreur lors de la récupération des products :", error);
    throw error; // Vous pouvez propager l'erreur si besoin
  }
};

export { fetchAllProductLines };
