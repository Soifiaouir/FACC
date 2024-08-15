import React from "react";
import CarouselA from "../../components/caroussels/carousselA/CarouselA";
import './Edition2012.css';
import Caroussel2012 from "../../components/caroussels/carousselU/caroussels/carousels2012/caroussel2012E";
import shiromani from "../../assets/shiromani.jpg";
import Caroussel2012top from "../../components/caroussels/carousselU/caroussels/carousels2012/Caroussel2012top";

    const Edition2012 = () =>{

    return (
        <div className="edit2012">
            <h2>Edition 2012</h2>
            <div className="hero">
                <div className="hGauche">
                    <h3>1ere Edition</h3>
                        <p>
                            La première édition du Festival d'arts contemporains des Comores (FACC) s'est déroulée du 13 au 18 juin 2012 à Moroni, la capitale des Comores.<br />
                            Cet événement historique a marqué la première fois que l'archipel des Comores organisait un festival d'art contemporain.<br />
                            Le thème central du festival était "la connaissance de soi".<br />
                            Le festival a duré cinq jours et s'est tenu dans plusieurs sites de Moroni, notamment :
                        </p>
                        <ul>
                            <li>Le Palais du Peuple</li>
                            <li>La Médina de la capitale</li>
                            <li>Le foyer des femmes</li>
                            <li>Le Centre National de la Documentation et de recherches scientifiques.</li>
                        </ul>
                        <p>
                            L'événement était parrainé par le célèbre sculpteur sénégalais Ousmane Sow.<br />
                            Ce premier festival d'art contemporain aux Comores visait non seulement à promouvoir la création artistique contemporaine, mais aussi à raconter l'histoire des Comores à travers une approche pluridisciplinaire, mêlant art, science et pédagogie.
                        </p>
                </div>
                <div class="hDroite">
                    <iframe width="521" height="391" src="https://www.youtube.com/embed/1iCwH7b2Gng" title="Comores, Festival 2012.avi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            <img src={shiromani} alt='tissus des comores' className="Salouva" />
            <div className="top">
                <h3>Les points forts</h3>
                <p>Le but de cette édition était de faire le point sur la création artistique des Comores, en mettant en valeur son originalité et sa modernité.<br/>
                    Il voulait aussi démontrer que tout en maintenant ses traditions et en ayant consciencede son histoire, les jeunes générations font et feront encore mieux face aux inévitables évolutions sociales, économiques et politiques.<br/>
                    La rencontre et le partage entre les peuples sont ainsi favorisés, le Festival promeut la diversité et le dynamisme culturel.<br/>
                    Cet évènement aborde ainsi trois aspects : artistique, scientifique et pédagogique.</p>
                < Caroussel2012top />
            </div>
            <img src={shiromani} alt='tissus des comores' className="Salouva" />
            <div className="middle">
                <h3>Les artistes</h3>
                <p>Plus de 40 artistes originaires de divers horizons à travers le monde ont pris part à cet événement exceptionnel aux Comores. Cette rencontre unique a permis de célébrer la diversité culturelle et artistique, tout en favorisant les échanges entre les participants. Les artistes ont partagé leurs talents et leurs créations, contribuant ainsi à enrichir le paysage artistique local et à promouvoir la culture comorienne sur la scène internationale.</p>
                < CarouselA />
            </div>
            <img src={shiromani} alt='tissus des comores' className="Salouva" />
            <div className="bottom">
                <h3>Galerie du Festival</h3>
                <Caroussel2012 />
            </div>

        </div>
    );
}

export default Edition2012;
