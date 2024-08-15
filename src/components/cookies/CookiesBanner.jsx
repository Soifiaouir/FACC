import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import './CookiesBanner.css';

const CookieBanner = () => {
  const [cookies, setCookie] = useCookies(['cookieConsent']);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (cookies.cookieConsent === undefined) {
      setIsVisible(true);
    }
  }, [cookies.cookieConsent]);

  const acceptAllCookies = () => {
    setCookie('cookieConsent', 'all', { path: '/', maxAge: 365 * 24 * 60 * 60 }); // 1 an
    setIsVisible(false);
  };

  const rejectNonEssentialCookies = () => {
    setCookie('cookieConsent', 'essential', { path: '/', maxAge: 365 * 24 * 60 * 60 }); // 1 an
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <h4>Utilisation des cookies</h4>
        <p>
          Le Festival d'Art Contemporain des Comores utilise des cookies pour améliorer votre expérience de navigation et analyser le trafic de notre site. 
          Vous pouvez choisir d'accepter tous les cookies, de ne conserver que les cookies essentiels, ou de personnaliser vos préférences.
        </p>
        <div className="cookie-actions">
            <div className='boutons'>
                <button onClick={acceptAllCookies} className="boutona">
                    Accepter 
                </button>
                <button onClick={rejectNonEssentialCookies} className="boutona">
                    Refuser 
                </button>
          </div>
          <Link to="/politique-cookies" className="cook">
            Paramètres des cookies
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;