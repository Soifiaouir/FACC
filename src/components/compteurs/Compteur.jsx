import React, { useState, useEffect, useCallback } from 'react';
import './Compteur.css';

const Compteur = ({ eventDate }) => {
  const calculateTimeLeft = useCallback(() => {
    const difference = +new Date(eventDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      const millisecondsInMinute = 1000 * 60;
      const millisecondsInHour = millisecondsInMinute * 60;
      const hoursInDay = 24;
      const daysInMonth = 30.44; // Moyenne approximative de jours par mois

      timeLeft = {
        Mois: Math.floor(difference / (millisecondsInHour * hoursInDay * daysInMonth)),
        Jours: Math.floor((difference / (millisecondsInHour * hoursInDay)) % daysInMonth),
        Heures: Math.floor((difference / millisecondsInHour) % hoursInDay),
        Minutes: Math.floor((difference / millisecondsInMinute) % 60)
      };
    }

    console.log("Time left:", timeLeft); // Log pour le débogage

    return timeLeft;
  }, [eventDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 60000); // Mise à jour toutes les minutes (60000 ms = 1 minute)

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval} className="timer-item">
        <span className="timer-value">{timeLeft[interval]}</span>
        <span className="timer-label">{interval}</span>
      </span>
    );
  });

  return (
    <div className='compteur'>
      {timerComponents.length ? (
        <div className="timer-container">
          {timerComponents}
        </div>
      ) : (
        <span>Un nouvel événement est en préparation</span>
      )}
    </div>
  );
};

export default Compteur;