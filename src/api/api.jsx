import { BASE_URL } from "../config";
// configuration de l'url de l'api

//fonction asynchrone pour récuperer les donéées des artistes depuis l'api
export const getArtistes = async () => {

  try {
    const response = await fetch (`${BASE_URL}/artistes`);
    if(!response.ok) {
      throw new Error('Erreur de récupération des donnée de l api');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('erreur lors de la recuperation des artistes');
    throw error ;// Relance l'erreur pour la gestion dans le comosant
  }
};