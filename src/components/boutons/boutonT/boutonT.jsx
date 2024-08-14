import React from "react";
import './BoutonT.css';

const BoutonTelecharger = ({ fileName, fileUrl }) => {
    const handleDownload = () => {
        if (!fileUrl) {
            console.error("L'URL du fichier n'est pas définie");
            return;
        }

        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileName || 'download'; // Utilise 'download' si fileName n'est pas fourni
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button onClick={handleDownload} target="blank"  className="boutont">
            Téléchargez
        </button>
    );
};

export default BoutonTelecharger;