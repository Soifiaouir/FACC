import React, { useState, useEffect } from "react";
import Logofacc from '../../assets/Logofacc.png';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [showPastEvents, setShowPastEvents] = useState(false);
    const [showPracticalInfo, setShowPracticalInfo] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Ferme le menu lorsque l'URL change (c'est-à-dire lorsqu'une nouvelle page est sélectionnée)
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="menu">
            <Link to="/" className="logo-link" onClick={handleLinkClick}>
                <img src={Logofacc} alt='logofacc' className="Facclogo"/>
            </Link>

            <div className="menu_resp" onClick={toggleMenu}>
                <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            </div>

            <div className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
                <div>
                    <Link to="/Edition2024" onClick={handleLinkClick}><p>Edition 2024</p></Link>
                </div>
                <div className="nav-dropdown" onMouseEnter={() => setShowPastEvents(true)} onMouseLeave={() => setShowPastEvents(false)}>
                    <span>Editions précédentes</span>
                    {showPastEvents && (
                        <div className="dropdown">
                            <Link to="/Edition2016" onClick={handleLinkClick}><p>Edition 2016</p></Link>
                            <Link to="/Edition2014" onClick={handleLinkClick}><p>Edition 2014</p></Link>
                            <Link to="/Edition2012" onClick={handleLinkClick}><p>Edition 2012</p></Link>
                        </div>
                    )}
                </div>
                <div className="nav-dropdown" onMouseEnter={() => setShowPracticalInfo(true)} onMouseLeave={() => setShowPracticalInfo(false)}>
                    <span>Infos Pratiques</span>
                    {showPracticalInfo && (
                        <div className="dropdown">
                            <Link to="/Contact" onClick={handleLinkClick}><p>Contacts</p></Link>
                            <Link to="/Apropos" onClick={handleLinkClick}><p>A propos</p></Link>
                            <Link to="/MentionLegal" onClick={handleLinkClick}><p>Mentions Légales</p></Link>
                            <Link to="/AppelCandidature" onClick={handleLinkClick}><p>Appel à Candidature</p></Link>
                            <Link to="/Politiquedecookies" onClick={handleLinkClick}><p>Politique des cookies</p></Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;