const API_URL = 'http:/localhost:5000';
// adresse du json server qui est en cour de fonctionne grace au npm run server

// fonction qui permet de recuperer l'artiste par son id et le fait qu'elle soit asychrone permet que cela se fasse sans bloquer l'execution du reste du code 
export const getArtistes = async () => {
    try {
      const response = await fetch(`${API_URL}/artistes`);
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des artistes');
      }
      const data = await response.json();//converti la data en json
      return data;//retourne les données des artistes
    } catch (error) {
      console.error('Erreur lors de la récupération des artistes:', error);
      throw error;
    }
  };
  
  export const getArtisteById = async (id) => {
    try {
      const response = await fetch(`${API_URL}/artistes/${id}`);
      if (!response.ok) {
        throw new Error(`Erreur lors de la récupération de l'artiste avec l'id ${id}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Erreur lors de la récupération de l'artiste avec l'id ${id}:`, error);
      throw error;
    }
  };
  