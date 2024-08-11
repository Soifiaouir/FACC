import React from 'react';
import './BoutonP.css';
import { useNavigate } from 'react-router-dom';

const BoutonP = ({ to, label}) => {
    const navigate = useNavigate ();

    const handleClick =() =>{
        navigate (to);
    };

  return (
    <button onClick={handleClick} className='boutonp'>
        {label}
    </button>
  );
};

export default BoutonP;