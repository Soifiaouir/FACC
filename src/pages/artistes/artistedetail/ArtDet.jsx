import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faFlickr } from '@fortawesome/free-brands-svg-icons';
import './ArtDet.css';

const getSocialMediaIcon = (url) => {
  if (url.includes('facebook.com')) return faFacebook;
  if (url.includes('instagram.com')) return faInstagram;
  if (url.includes('flickr.com')) return faFlickr;
  return null; // Retourne null si aucun réseau social correspondant n'est trouvé
};

const ArtisteDetail = ({ artiste, onClose }) => {
  console.log("ArtisteDetail rendu avec:", artiste);

  const socialMediaIcon = getSocialMediaIcon(artiste.reseauSocial);

  return (
    <div className="artiste-detail-overlay" onClick={onClose}>
      <div className="artiste-detail-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <h2>{artiste.prenom} {artiste.nom}</h2>
        <img 
          src={require(`../../../assets/Artistes/${artiste.photo}`)} 
          alt={`${artiste.prenom} ${artiste.nom}`} 
        />
        <p>{artiste.description}</p>
        {socialMediaIcon && (
          <a href={artiste.reseauSocial} target="_blank" rel="noopener noreferrer" className="social-media-link">
            <FontAwesomeIcon icon={socialMediaIcon} size="2x" />
          </a>
        )}
        <h3>Œuvres</h3>
        {artiste.url && (
          <img 
            src={require(`../../../assets/Oeuvres/${artiste.url}`)} 
            alt={`Œuvre de ${artiste.prenom} ${artiste.nom}`} 
          />
        )}
      </div>
    </div>
  );
};

export default ArtisteDetail;