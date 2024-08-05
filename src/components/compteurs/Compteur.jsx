import React, { useState, useEffect } from 'react';
import './Compteur.css';

const Countdown = ({ eventDate }) => {
  // Fonction pour calculer le temps restant jusqu'à la date de l'événement
  const calculateTimeLeft = () => {
    const difference = +new Date(eventDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      // Calcul des jours, heures, minutes et secondes restants
      timeLeft = {
        J: Math.floor(difference / (1000 * 60 * 60 * 24)),
        H: Math.floor((difference / (1000 * 60 * 60)) % 24),
        M: Math.floor((difference / 1000 / 60) % 60),
        S: Math.floor((difference / 1000) % 60),
      };
    }

    console.log("Time left:", timeLeft); // Log pour le débogage

    return timeLeft;
  };

  // État pour stocker le temps restant
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Effet pour mettre à jour le temps restant chaque seconde
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Nettoyage du timer lors du démontage du composant
    return () => clearTimeout(timer);
  });

  // Tableau pour stocker les composants d'affichage du temps
  const timerComponents = [];

  // Création des composants d'affichage pour chaque unité de temps
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  // Rendu du composant
  return (
    <div className='compteur'>
      {timerComponents.length ? timerComponents : <span>Un nouvel evenement est en préparation</span>}
    </div>
  );
};

export default Countdown;