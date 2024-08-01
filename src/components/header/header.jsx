import React from "react";
import Logo from '../../assets/logo-vecto.png';
import { Link } from 'react-router-dom';
import './nav.css';

const Navbar = () => {
    return (
        <div className="navlogo">
            <Link to="/" className='logo'>
                <img src={Logo} alt='logo' className="logoimg"/>
            </Link>
            <Link to='/edition2024'>
                <p>Edition 2024</p>
            </Link>
        </div>
    );
};

export default Navbar;