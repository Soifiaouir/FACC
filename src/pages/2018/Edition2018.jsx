import React from "react";
import './Edition2018.css';
import quatrième from '../../assets/Invitation/4eme.png';

const Edition2018 = () => {

    return (
        <div className="Edition2018">
            <h2>Edition 2018</h2>
            <div className="2018Top">
                <h3>Quatrième Editon</h3>
                <img src={quatrième} alt="quatrième invitation" className="quatre" />
                
            </div>
        </div>
    );
};

export default Edition2018;