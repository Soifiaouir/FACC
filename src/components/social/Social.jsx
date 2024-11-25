import React from "react";
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const SocialIcons = ({ facebookUrl, instagramUrl }) => (
  <div className="social">
    <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
      <FaFacebook size={32} color="#3b5998" /> {/* Couleur Facebook */}
    </a>
    <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
      <FaInstagram size={32} color="#E4405F" /> {/* Couleur Instagram */}
    </a>
  </div>
);

export default SocialIcons;
