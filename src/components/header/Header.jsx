import React, { useState} from "react";
import Logofacc from '../../assets/Logofacc.png';
import { Link } from 'react-router-dom';
import './Header.css';

const Navbar = () => {

    const [showPastEvents, setShowPastEvents] = useState(false);
    const [showPracticalInfo, setShowPracticalInfo] = useState(false);

    return (
        <nav className="menu">
            <Link to="/" className="logo-link">
                <img src={Logofacc} alt='logofacc' className="Facclogo"/>
            </Link>
            <Link to="/Edition2024">
                <p><span>Edition 2024</span></p>
            </Link>
            <Link to="/Artistes">
                <p><span>Artistes</span></p>
            </Link>
            <div className="nav-dropdown" onMouseEnter={() => setShowPastEvents(true)}  onMouseLeave={() => setShowPastEvents(false)}>
                <span>Evenement Passé</span>
                {showPastEvents && (
                    <div className="dropdown">
                        <p>2022</p>
                        <p>2020</p>
                        <p>2018</p>
                        <p>2016</p>
                        <Link to="/Edition2012"><p>Edition2012</p></Link>
                    </div>
                )}
            </div>
            <div className="nav-dropdown" onMouseEnter={() => setShowPracticalInfo(true)}  onMouseLeave={() => setShowPracticalInfo(false)}>
                <span>Infos Pratiques</span>
                {showPracticalInfo && (
                    <div className="dropdown">
                        <p>contact</p>
                        <p>A propos</p>
                    </div>
                )}
            </div>

        </nav>
    );
};

export default Navbar;