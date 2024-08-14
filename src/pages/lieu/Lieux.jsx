import React from "react";
import Lieux from "../../assets/Oeuvres/Lieux.jpg";
import './Lieux.css';

const Localisation = () => {
    return(
        <div className="lieu">
        <h2>Lieux</h2>
        <img src={Lieux} alt='lieux' className="lieux"/>    
        <h3> Nom lieux</h3>
        <p>Nous vous invitons à explorer les différents lieux d'exposition du Festival d'Arts Contemporains des Comores, qui se déroulera à Moroni. Chaque espace a été soigneusement sélectionné pour offrir une expérience immersive et unique, mettant en valeur la créativité des artistes comoriens et internationaux.</p>
       
        <img src={Lieux} alt='lieux' className="lieux"/>    
        <h3>Nom Lieux</h3>
        <p>Nous vous invitons à explorer les différents lieux d'exposition du Festival d'Arts Contemporains des Comores, qui se déroulera à Moroni. Chaque espace a été soigneusement sélectionné pour offrir une expérience immersive et unique, mettant en valeur la créativité des artistes comoriens et internationaux.</p>

        <img src={Lieux} alt='lieux' className="lieux"/>    
        <h3>Nom Lieux</h3>
        <p>Nous vous invitons à explorer les différents lieux d'exposition du Festival d'Arts Contemporains des Comores, qui se déroulera à Moroni. Chaque espace a été soigneusement sélectionné pour offrir une expérience immersive et unique, mettant en valeur la créativité des artistes comoriens et internationaux.</p>
        </div>
    );
}
export default Localisation;