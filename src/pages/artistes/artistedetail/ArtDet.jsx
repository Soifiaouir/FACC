import React from 'react';
import './ArtDet.css';

const ArtisteDetail = ({ artiste, onClose }) => {
  console.log("ArtisteDetail rendu avec:", artiste);

  return (
    <div className="artiste-detail-overlay" onClick={onClose}>
      <div className="artiste-detail-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <h2>{artiste.prenom} {artiste.nom}</h2>
        <img 
          src={require(`../../../assets/Artistes/${artiste.photo}`)} 
          alt={`${artiste.prenom} ${artiste.nom}`} 
        />
        <p>{artiste.biographie}</p>
        <h3>Œuvres</h3>
        <img 
          src={require(`../../../assets/Oeuvres/${artiste.url}`)} 
          alt={`Œuvre de ${artiste.prenom} ${artiste.nom}`} 
        />
      </div>
    </div>
  );
};

export default ArtisteDetail;