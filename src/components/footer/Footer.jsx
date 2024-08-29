import React from 'react';
import './Footer.css'; // Assurez-vous de créer ce fichier CSS
import Logofacc from '../../assets/Logofacc.png';
import { Link } from 'react-router-dom';
import SocialIcons from '../social/Social';

const Footer = () => {
  return (
    <footer className="footer">
      <div className='footer-logo'>
        <Link to="/" className="logo-link"><img src={Logofacc} alt='logofacc' className="Facclogo"/></Link>
      </div>
      <div className="contenus">
         <div >
              <div className='columns'>
              <div className="footer-column">
                <h3>FACC</h3>
                <Link to="/Apropos"><p>A propos</p></Link>
                <Link to="/Contact"><p>Contacts</p></Link>
                < SocialIcons 
                    facebookUrl="https://www.facebook.com/Facdescomores" 
                    instagramUrl="https://www.instagram.com/facc269/" />
              </div>
              
              <div className="footer-column" id='mobil'>
                <h3>Communauté</h3>
                  <Link to="/Artistes"><p>Artistes</p></Link>
                  <p><a href="https://www.unesco.org/creativity/en/policy-monitoring-platform/festival-dart-contemporain-des-comores#:~:text=il%20se%20veut%20d'une,des%20concerts%20et%20du%20theatre." target="_blank" rel="noopener noreferrer">UNESCO</a></p>
                  <p><a href="https://biennaledakar.org/" target="_blank" rel="noopener noreferrer">Biennale de Dakar</a></p>
                  </div>
              </div>
            </div>
            <div className="footer-signature" id='mobile'>
                  <p><a href="www.linkedin.com/in/soifia-ouirdane-04a81a2bb" target="_blank">Soifia Ouirdane</a></p>
            </div>
          </div>
          
    </footer>
  );
};

export default Footer;