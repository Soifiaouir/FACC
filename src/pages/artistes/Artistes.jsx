import React, { useState, useEffect } from "react";
import { getArtistes } from '../../api/api';
import ArtisteDetail from './artdet/ArtistesDetails';
import './Artistes.css';

const Artistes = () => {
  const [artistes, setArtistes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedArtist, setSelectedArtist] = useState(null);

  useEffect(() => {
    const fetchArtistes = async () => {
      try {
        const data = await getArtistes();
        setArtistes(data);
        setLoading(false);
      } catch (err) {
        console.error("Erreur détaillée:", err);
        setError(`Erreur lors du chargement des artistes pistache:  ${err.message}`);
        setLoading(false);
      }
    };

    fetchArtistes();
  }, []);

  const handleCardClick = (artiste) => {
    console.log("Artiste sélectionné:", artiste);
    setSelectedArtist(artiste);
  };

  const handleCloseDetail = () => {
    setSelectedArtist(null);
  };

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <div className={`artistes-page ${selectedArtist ? 'blur-background' : ''}`}>
        <h2>Artistes</h2>
        <div className="artistes-grid">
          {artistes.map((artiste) => {
            const imageUrl = require(`../../assets/Artistes/${artiste.photo}`);
            const oeuvreUrl = require(`../../assets/Oeuvres/${artiste.url}`);
            
            return (
              <div 
                key={artiste.id} 
                className="artiste-card"
                onClick={() => handleCardClick(artiste)}
              >
                <img src={imageUrl} alt={`${artiste.prenom} ${artiste.nom}`} />
                <h4>{artiste.prenom} {artiste.nom}</h4>
                <img 
                  src={oeuvreUrl} 
                  alt={`Œuvre de ${artiste.prenom} ${artiste.nom}`}  
                  className="oeuvre"
                />
              </div>
            );
          })}
        </div>
      </div>
      {selectedArtist && (
        <ArtisteDetail 
          artiste={selectedArtist} 
          onClose={handleCloseDetail} 
        />
      )}
    </>
  );
};

export default Artistes;