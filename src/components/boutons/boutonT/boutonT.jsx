import React from "react";
import './BoutonT.css';

const BoutonTelecharger = ({fileName, fileUrl}) => {
    const handleDownload = () => {

        const link = document.createElement('a');
        link.href = fileUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
    <button onClick={handleDownload} className="boutont">
        Téléchargez
    </button>
    );
};

export default BoutonTelecharger;