import React from "react";
import './Edition2024.css';
import Compteur from "../../components/compteurs/Compteur";
import Program from "../../assets/Invitation/6eme.png";
import Lieu from "../../assets/Lieux/UNIV.jpg";
import BoutonP from "../../components/boutons/boutonP/boutonP";
import shiromani from "../../assets/shiromani.jpg";
import Caroussel2024 from "../../components/caroussels/carousselU/caroussels/carousel2024/Caroussel2024";
import Artistes from "../../assets/Artistes/Denis.jpg";
import BoutonTelecharger from "../../components/boutons/boutonT/boutonT";

const Edition2024 = () => {

    const eventDate = "2024-11-21T10:15:00";

    return (
        <div className="Edition2024">
            <h2>Edition 2024</h2>
            <div className="hero2024">
            <Caroussel2024 />
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
                    Link to="/Lieux" 
                    label="Explorez" />
                 </div>
                 <img src={Lieu} alt='lieux' className="lieu"/>    
            </div>
           
            <img src={shiromani} alt='tissus des comores' className="Salouva" />
            <div className="section">
                <img src={Artistes} alt='prestation' className="program"/>    
                <div className="droite">
                    <h3>Artistes</h3>
                    <p>En visitant notre page dédiée, vous aurez l'opportunité de plonger dans l'univers unique de chaque artiste, d'admirer leurs œuvres et de comprendre l'inspiration qui les anime. Que vous soyez amateur d'art ou simplement curieux, cette expérience vous permettra de vous connecter avec les talents qui façonnent la scène artistique du FACC.</p>
                    <BoutonP 
                        Link to="/Artistes" 
                        label="Découvrez" /> 
                </div>
            </div>
        


        </div>
    );
}

export default Edition2024 ;