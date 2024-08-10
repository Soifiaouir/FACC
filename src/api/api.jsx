import { BASE_URL } from "../config";
// configuration de l'url de l'api

//fonction asynchrone pour récuperer les donéées des artistes depuis l'api
export const getArtistes = async () => {
    try {
      const response = await fetch(BASE_URL);
     
      if (!response.ok) {
        throw new Error('Erreur de récupération des données de l\'api');
      }
      const data = await response.json();
      console.log('Data:', data);
      return data.artistes; // Accéder à la clé "artistes" dans le JSON
    } catch (error) {
      console.error('Erreur lors de la récupération des artistes:', error.message);
      throw error; // Relance l'erreur pour la gestion dans le composant
    }
  };
