import React, { useState} from "react";
import Logofacc from '../../assets/Logofacc.png';
import { Link } from 'react-router-dom';
import './Header.css';

const Navbar = () => {

    const [showPastEvents, setShowPastEvents] = useState(false);
    const [showPracticalInfo, setShowPracticalInfo] = useState(false);

    return (
        <nav className="menu">
            
            <Link to="/" className="logo-link"><img src={Logofacc} alt='logofacc' className="Facclogo"/></Link>
            <Link to="/Edition2024"><p>Edition 2024</p></Link>
            <Link to="/Artistes"><p>Artistes</p></Link>

            <div className="nav-dropdown" onMouseEnter={() => setShowPastEvents(true)}  onMouseLeave={() => setShowPastEvents(false)}>
                <span>Evenements Passés</span>
                {showPastEvents && (
                    <div className="dropdown">
                        <p>2022</p>
                        <Link to="/Edition2018"><p>Edition 2018</p></Link>
                        <Link to="/Edition2014"><p>Edition 2014</p></Link>
                        <Link to="/Edition2016"><p>Edition 2016</p></Link>
                        <Link to="/Edition2012"><p>Edition 2012</p></Link>
                    </div>
                )}
            </div>
            <div className="nav-dropdown" onMouseEnter={() => setShowPracticalInfo(true)}  onMouseLeave={() => setShowPracticalInfo(false)}>
                <span>Infos Pratiques</span>
                {showPracticalInfo && (
                    <div className="dropdown">
                        <Link to="/Contact"><p>Contacts</p></Link>
                        <Link to="/Apropos"><p>A propos</p></Link>
                        <Link to="/MentionLegal"><p>Mentions Légales</p></Link>
                    </div>
                )}
            </div>

        </nav>
    );
};

export default Navbar;