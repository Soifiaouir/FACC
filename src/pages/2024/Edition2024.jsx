import React from "react";
import './Edition2024.css';
import Hero from '../../assets/2016/oeuvre/13051593_472133249657699_3009297434381898285_n.jpg';
import Compteur from "../../components/compteurs/Compteur";
import BoutonTelecharger from "../../components/boutons/boutonT/boutonT";
import Program from "../../assets/Invitation/6eme.png";
import Lieux from "../../assets/2016/13043386_472133079657716_5459179619092737188_n.jpg";
import BoutonP from "../../components/boutons/boutonP/boutonP";
import shiromani from "../../assets/shiromani.jpg";

const Edition2024 = () => {

    const eventDate = "2024-11-21T10:15:00";

    return (
        <div className="Edition2024">
            <h2>Edition 2024</h2>
            <div className="hero2024">
            <img src={Hero} alt='art de rue' className="HeroB" />
            <p>Chers visiteurs et artistes,<br/>
            Nous avons le plaisir de vous inviter à la prochaine édition du Festival d'Arts Contemporains des Comores, qui se tiendra le 21 novembre 2024 à Moroni. Organisé par l'Association du Festival d'Art Contemporain des Comores, cet événement biennal, connu sous le nom de "Hudjijuwa", célèbre la richesse et la diversité de l'art comorien et international.
            </p>
            </div>
            < Compteur eventDate={eventDate}/>
            <div className="section">
                <img src={Program} alt='prestation' className="program"/>    
                <div className="droite">
                    <h3>PROGRAMME</h3>
                    <p>Nous vous attendons nombreux pour partager ensemble cette expérience artistique inoubliable qui contribue à la valorisation de l'art et de la culture comorienne. Ne manquez pas cette opportunité de vous immerger dans un monde de créativité et d'inspiration</p>
                    <BoutonTelecharger 
                        fileName="cvsoif"
                        fileUrl="https://www.canva.com/design/DAGIrgD6F04/zQBf-ddSxcxnXaEH2-CkkQ/view?utm_content=DAGIrgD6F04&utm_campaign=designshare&utm_medium=link&utm_source=editor"/>
                    </div>
            </div>
            <img src={shiromani} alt='tissus des comores' className="Salouva" />
            <div className="section">
                <div className="droite">
                    <h3>LIEUX</h3>
                    <p>Nous vous invitons à explorer les différents lieux d'exposition du Festival d'Arts Contemporains des Comores, qui se déroulera à Moroni. Chaque espace a été soigneusement sélectionné pour offrir une expérience immersive et unique, mettant en valeur la créativité des artistes comoriens et internationaux.</p>
                    <BoutonP 
                    Link to="/Localisation" 
                    label="Explorez" />
                 </div>
                 <img src={Lieux} alt='lieux' className="lieux"/>    
            </div>
           
            <img src={shiromani} alt='tissus des comores' className="Salouva" />
            <div className="section">
                <img src={Program} alt='prestation' className="program"/>    
                <div className="droite">
                    <h3>Artistes</h3>
                    <p>Nous vous attendons nombreux pour partager ensemble cette expérience artistique inoubliable qui contribue à la valorisation de l'art et de la culture comorienne. Ne manquez pas cette opportunité de vous immerger dans un monde de créativité et d'inspiration</p>
                    <BoutonP 
                        Link to="/Artistes" 
                        label="Explorez" /> 
                </div>
            </div>
        


        </div>
    );
}

export default Edition2024 ;