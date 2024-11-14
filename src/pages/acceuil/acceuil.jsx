import React from "react";
import './acceuil.css';
import Invitation from "../../assets/Invitation/6eme.png";
import Compteur from "../../components/compteurs/Compteur";
import CarousselAcc from "../../components/caroussels/carousselU/caroussels/carouselAcc/CarousselAcc";
import CarousselLogo from "../../components/caroussels/carousselU/caroussels/carousellogo/CarousselLogo";
import CarousselO from "../../components/caroussels/carousselU/caroussels/carouselO/CarousselO";
import Shiromani from '../../assets/shiromani.jpg';
import Video from "../../components/video/video";

const eventDate = "2024-11-21T10:15:00";

function Accueil() {
    return (
        <div className="accueil">
            <h1>Festival d'Arts Contemporains des Comores (FACC)</h1>
            <div className="compt">
                <Compteur eventDate={eventDate}/>
            </div>
            <div className="video">
            <Video 
            videoSource="https://www.instagram.com/p/DCE_rhtouzd/" 
            type="instagram" 
            
           />
            </div>
            <h3 className="mobil">5 Editions</h3>
            <h2>Présentation du FACC</h2>
            <div className="hero">
                <div className="herogauche">
                    <CarousselAcc />
                </div>
                <div className="herodroite">
                    <h3>Hudjijuwa</h3>
                    <p>
                    Le Festival d'Arts Contemporains des Comores, également connu sous le nom de Hudjijuwa, est un événement culturel phare qui se déroule tous les deux ans à Moroni. Créé en 2012, il met en lumière la richesse et la diversité de l'art comorien tout en favorisant les échanges culturels internationaux. Le FACC propose une programmation variée comprenant des expositions, des performances, des projections de films et des débats, impliquant des artistes locaux et internationaux. Ce festival joue un rôle essentiel dans la promotion de l'identité culturelle des Comores et l'éducation artistique des jeunes générations.
                    </p>
                </div>
            </div>
            <img src={Shiromani} alt='Invitation' className='Salouva' />   
            {/* <div className="actualité">
                <h2> Actualité </h2>
                <p>L'Association Zangoma expose pour une noble cause en cette période d'Octobre Rose. Dans un geste de solidarité et de sensibilisation, ces deux entités culturelles ont le plaisir de présenter une œuvre d'art exceptionnelle, spécialement conçue pour soutenir les femmes dans leur lutte contre le cancer du sein.
                Cette installation artistique, à la fois puissante et émouvante, sera exposée sur le fronton de l'hôtel de ville de Mamoudzou, le chef-lieu de Mayotte. </p>
                <CarousselO/>
            </div> */}
            <div className="bandeau">
                <h3 className="E">5 Editions</h3>
                <h3>+ de  100 Artistes</h3>
                <h3 className="E">12 ans d'art</h3>
            </div>
            <h2>Evenement à venir</h2>  
            <div className="futur">
                <div className="sectionG">
                    <div>
                        <h4>Le Festival d'Arts Contemporains desComores : FACC, se tiendra du 21 au 28 novembre 2024 à Moroni. </h4>
                        <p>Cette sixième édition aura pour thème général <b>RESISTER</b> c'est-à-dire l'engagement à être, faire et avoir pour la réalisation de nos rêves. Résister c'est nourrir, conserver notre vitalité, notre émerveillement. Résister invite à s'affirmer, s'inventer, rechercher le désir, l'exprimer en rapport avec un présent qui est appelé à progresser, évoluer. <br/>
                        Résister c'est aussi sublimer son monde en le présentant tel qu'il est souhaité.<br/>
                        Cette dimension introspective permet à l'artiste de creuser en lui pour s'offrir au monde, son monde. C'est un acte de générosité, de partage, création du vivre et construire ensemble.<br/>
                        L'art par ce qu'il donne à voir, montrer, entendre, ressentir, invite dans son essence la plus profonde à résister. Le choix du vecteur, de l'esthétique concourt également à cet objectif puissant qui questionne de tous temps.<br/>
                        Le concept « Résister », se propose de développer une stratégie de monstrations pour consolider la Rencontre avec la population et la ville de Moroni, investie en plateforme rayonnante pour l'art contemporain...
                    </p>
                    
                   </div>
                   <img src={Invitation} alt='Invitation' className='invitation' />         
                </div>
            </div>
                <h3 className="mobil">12 ans d'art</h3>     
            {/* <div className="logoC">
                <CarousselLogo/>
            </div> */}
        </div>
    );
}

export default Accueil;