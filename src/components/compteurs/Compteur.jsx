import React, { useState, useEffect } from 'react';
import './Compteur.css';

const Compteur = ({ eventDate }) => {
  // Fonction pour calculer le temps restant jusqu'à la date de l'événement
  const calculateTimeLeft = () => {
    const difference = +new Date(eventDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      const millisecondsInHour = 1000 * 60 * 60;
      const hoursInDay = 24;
      const daysInMonth = 30.44; // Moyenne approximative de jours par mois

      // Calcul des mois, jours et heures restants
      timeLeft = {
        Mois: Math.floor(difference / (millisecondsInHour * hoursInDay * daysInMonth)),
        Jours: Math.floor((difference / (millisecondsInHour * hoursInDay)) % daysInMonth),
        Heures: Math.floor((difference / millisecondsInHour) % hoursInDay)
      };
    }

    console.log("Time left:", timeLeft); // Log pour le débogage

    return timeLeft;
  };

  // État pour stocker le temps restant
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Effet pour mettre à jour le temps restant chaque heure
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 3600000); // Mise à jour toutes les heures (3600000 ms = 1 heure)

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
      {timerComponents.length ? timerComponents : <span>Un nouvel événement est en préparation</span>}
    </div>
  );
};

export default Compteur;