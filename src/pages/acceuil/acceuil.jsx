import React from "react";
import './acceuil.css';
import CarrousselImg from "../../components/caroussels/carrousselimg/Carrousselimg";
import Invitation from "../../assets/Invitation.jpg";
import Compteur from "../../components/compteurs/Compteur";
import CarrousselP from "../../components/caroussels/carousselP/CarrousselP";

const eventDate = "2024-11-21T10:15:00";

function Acceuil() {

    return (
        <div className="acceuil">
            <h1>Festival d'Arts Contemporains des Comores (FACC)</h1>
            <iframe width="695" height="391" src="https://www.youtube.com/embed/enT-JJIIo48" title="Bande annonce  Documentaire FACC - MP 13" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="video"></iframe>
            <h3 className="mobil">5ème Edition</h3>
            <h2>Présentation du FACC</h2>
            <div className="hero">
                <div className="herogauche">
                <CarrousselImg />
                </div>
                <div className="herodroite">
                    <h3>Hudjijuwa</h3>
                    <p>
                    Le Festival d'Arts Contemporains des Comores, également connu sous le nom de Hudjijuwa, est un événement culturel phare qui se déroule tous les deux ans à Moroni. Créé en 2012, il met en lumière la richesse et la diversité de l'art comorien tout en favorisant les échanges culturels internationaux. Le FACC propose une programmation variée comprenant des expositions, des performances, des projections de films et des débats, impliquant des artistes locaux et internationaux. Ce festival joue un rôle essentiel dans la promotion de l'identité culturelle des Comores et l'éducation artistique des jeunes générations.
                    </p>
                </div>
            </div>
                <div className="bandeau">
                    <h3 className="E">5ème Edition</h3>
                    <h3>+ de  100 Artistes</h3>
                    <h3 className="E">12ans d'art</h3>
                </div>
                    <h2>Evenement à venir</h2>  
                <div className="futur">
                    <div className="sectionG">
                        <h3>6eme Edition du Facc</h3>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
The standard Lorem Ipsum passage, used since the 1500s
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pari</p>
                        <h3 className="mobil">12ans d'art</h3>
                    </div>
                    <img src={Invitation} alt='Invitaion' class='invitation' />           
                </div>
                <div className="compt">
                    <h3 className="E">6eme Edition</h3>
                    <Compteur eventDate={eventDate}/>
                </div>
                < CarrousselP visibleImages={3}/>
            </div>
    

);
}

export default Acceuil;

