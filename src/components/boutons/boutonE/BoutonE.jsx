import React from 'react';
import './BoutonE.css';

const BoutonE = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="bouton-e">
      {children}
    </button>
  );
};

export default BoutonE;