import React from 'react';
import './ArtistesDetails.css';

const ArtisteDetail = ({ artiste, onClose }) => {
  console.log("ArtisteDetail rendu avec:", artiste);

  return (
    <div className="artiste-detail-overlay" onClick={onClose}>
      <div className="artiste-detail-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <img 
          src={require(`../../../assets/Artistes/${artiste.photo}`)} 
          alt={`${artiste.prenom} ${artiste.nom}`} 
        />
        <h4>{artiste.prenom} {artiste.nom}</h4>
        <a href={artiste.reseauSocial} target="_blank" rel="noopener noreferrer">
          Voir le profil sur les réseaux sociaux
        </a>
        <p>{artiste.description}</p>       
     </div>
    </div>
  );
};

export default ArtisteDetail;