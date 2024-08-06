import React from 'react';
import './Modal.css'; // Assurez-vous que ce fichier CSS existe

const Modal = ({ artist, onClose }) => {
  // Chemins des images (assurez-vous que ces chemins sont corrects)
  const imageUrl = require(`../../assets/Artistes/${artist.photo}`);
  const oeuvreUrl = require(`../../assets/Oeuvres/${artist.url}`);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <img src={imageUrl} alt={`${artist.prenom} ${artist.nom}`} />
        <h3>{artist.prenom} {artist.nom}</h3>
        <p>{artist.description}</p>
        <img src={oeuvreUrl} alt={`Œuvre de ${artist.prenom} ${artist.nom}`} />
        <a href={artist.reseauSocial} target="_blank" rel="noopener noreferrer">Réseau social</a>
      </div>
    </div>
  );
};

export default Modal;