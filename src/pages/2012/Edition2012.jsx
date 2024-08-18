import React from "react";
import CarouselA from "../../components/caroussels/carousselA/CarouselA";
import './Edition2012.css';
import Caroussel2012 from "../../components/caroussels/carousselU/caroussels/carousels2012/caroussel2012E";
import shiromani from "../../assets/shiromani.jpg";
import Caroussel2012top from "../../components/caroussels/carousselU/caroussels/carousels2012/Caroussel2012top";
import Oussman from "../../assets/2012/Ousmane_Sow.jpg";

    const Edition2012 = () =>{

    return (
        <div className="edit2012">
            <h2>Edition 2012</h2>
                <h3>Première Edition</h3>
                        <div className="hero">
                            <div>
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
                            <div className="Vid2012">
                                <iframe width="521" height="391" src="https://www.youtube.com/embed/1iCwH7b2Gng" title="Comores, Festival 2012.avi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen ></iframe>
                            </div>
                        </div>
            

            <img src={shiromani} alt='tissus des comores' className="Salouva" />
            
            <div className="top">
                <h3>Les points forts</h3>
                <div className='PF'>
                <p>Le but de cette édition était de faire le point sur la création artistique des Comores, en mettant en valeur son originalité et sa modernité.<br/>
                    Il voulait aussi démontrer que tout en maintenant ses traditions et en ayant consciencede son histoire, les jeunes générations font et feront encore mieux face aux inévitables évolutions sociales, économiques et politiques.<br/>
                    La rencontre et le partage entre les peuples sont ainsi favorisés, le Festival promeut la diversité et le dynamisme culturel.<br/>
                    Cet évènement aborde ainsi trois aspects : artistique, scientifique et pédagogique.</p>
                </div>
                < Caroussel2012top />
            </div>

                <h3>Le Parain</h3>
            <div className="parain2012">
                <p>Ousmane Sow, sculpteur sénégalais de renommée internationale, a joué un rôle déterminant dans le lancement du premier festival d'art contemporain des Comores en juin 2012. En tant que parrain de l'événement, il a apporté une dimension prestigieuse et une crédibilité artistique considérable à cette initiative culturelle pionnière.<br/>
                    Son implication a été multifacette. Tout d'abord, sa notoriété a permis d'attirer l'attention des médias et du public sur ce festival, lui conférant une visibilité accrue à l'échelle nationale et internationale. Sa présence a également encouragé la participation d'autres artistes, dont certains venus de France et de Belgique, enrichissant ainsi la diversité des œuvres présentées.
                    Lors de l'inauguration, Ousmane Sow a exprimé son enthousiasme face à la qualité des œuvres exposées. Il a déclaré être "ravi" de sa découverte, soulignant que c'était "une gageure pour les organisateurs" et qu'ils avaient "réussi à relever le défi". Ces commentaires positifs d'un artiste de son calibre ont non seulement validé la qualité artistique de l'événement, mais ont aussi boosté la confiance des artistes locaux et des organisateurs.<br/>
                    Sow a particulièrement mis en avant le potentiel artistique de l'archipel, affirmant que "la qualité des œuvres est prometteuse" et qu'il y avait "une homogénéité" rassurante, garantissant que "la relève est assurée". Ces remarques ont contribué à légitimer la scène artistique contemporaine comorienne et à encourager son développement futur.
                </p>
                <img src={Oussman} alt="Oussmane SOW au festival" className="Ouss" />
            </div>

            <img src={shiromani} alt='tissus des comores' className="Salouva" />
           
            <div className="middle">
                <h3>Les artistes</h3>
                    <div className='art2012'>
                    <p>
                        Plus de 40 artistes originaires de divers horizons à travers le monde ont pris part à cet événement exceptionnel aux Comores. Cette rencontre unique a permis de célébrer la diversité culturelle et artistique, tout en favorisant les échanges entre les participants. Les artistes ont partagé leurs talents et leurs créations, contribuant ainsi à enrichir le paysage artistique local et à promouvoir la culture comorienne sur la scène internationale.
                    </p>
                </div>
                < CarouselA />
            </div>
                <h3>Implication Scolaire</h3>
                 <div className="scolarité2012">
                <p> Le Festival d'Art Contemporain des Comores (F.A.C.C.) avait visé à attirer un large public, tant international que national, en mettant l'accent sur la jeunesse comorienne. Le Ministère de l'Education Nationale avait intégré cet événement dans le programme scolaire pour sensibiliser les jeunes aux arts visuels.<br/>
                    Le festival avait impliqué activement les établissements scolaires :
                    <ul>
                    <li>Aux Comores, des classes avaient participé directement à l'événement.</li>
                    <li> À Mayotte, 5 établissements avaient participé à un concours, avec le soutien des autorités locales.</li>
                    </ul>
                    Le F.A.C.C. avait cherché à créer des liens entre le monde scolaire et artistique à travers des actions pédagogiques spécifiques :
                    <ul>
                    <li> Un artiste réunionnais avait réalisé une performance avec une classe comorienne.</li>
                    <li>À Mayotte, les enseignants avaient travaillé sur le concept du festival, avec un focus sur l'œuvre d'Ousmane SOW.</li>
                    <li>Des artistes mahorais avaient présenté leur art aux élèves.</li>
                    </ul>
                    Ces initiatives avaient visé à permettre aux élèves de découvrir l'univers artistique, d'explorer leurs émotions et leur imagination, et de mieux comprendre leur histoire et la place des Comores dans la région.
                </p>
                 </div>

            <img src={shiromani} alt='tissus des comores' className="Salouva" />
            
            <div className="bottom">
                <h3>Galerie du Festival</h3>
                <Caroussel2012 />
            </div>
                <h3 >Aspect scientifique</h3>
            <div className="science2012">     
            
                <p>La connaissance de soi s'était conjuguée avec la rencontre de l'être. Elle s'était destinée à la construction de la relation aux autres, en passant par l'Histoire qui cimentait les liens d'un peuple. Le Festival d'Art Contemporain des Comores avait voulu agir dans cette voie en présentant divers aspects du passé et du présent de l'Archipel.
                Les scientifiques avaient exposé, dans une approche pluridisciplinaire sociologique, archéologique, anthropologique... des aspects de l'histoire de l'Archipel.
                Mais aussi l'histoire abordée sous un angle plus global avait été examinée et présentée par des scientifiques venus d'ailleurs.<br/>
                Différentes problématiques avaient été examinées lors du forum scientifique :
                <ul>
                    <li>Les sources de la littérature négro-africaine de langue française - <b>Makhily GASSAMA</b></li>
                    <li>Les migrations déterminées - Présentation des grandes périodes d'arrivées des groupes qui avaient marqué l'histoire - <b>Damir BEN ALI</b></li>
                    <li>Les sociétés coloniales 1841- 1975 - <b>Mouhoussine BARWANE</b></li>
                    <li>L'Afrique à la recherche de son histoire à travers l'œuvre de Cheikh Anta Diop - <b>Cheikh M'backé DIOP</b></li>
                    <li>La grotte de Hamampundru (Hamampoundrou) et le rituel associé. Usage et perception. Contribution à l'historiographie de l'île d'Anjouan - <b>Bourhane ABDEREHMANE</b></li>
                    <li>Connaissance des religions du XIIIème au XIXème siècle -<b>Hamdani BAKAR</b> </li>
                    <li>Le mouvement populaire mahorais. Le combat pour Mayotte française 1958-1976 - <b>Mamaye Idriss</b></li>
                    <li>Les Comores au jour le jour – <b>Ahmed OULEDI</b></li>
                    <li>Art contemporain et insularité - <b>Isabelle POUSSIER</b></li>
                </ul>
                    Deux expositions avaient été directement mises en parallèle :<br/>
                    Cheikh M'backé DIOP « l'Afrique et les Sciences ».<br/>
                    Ahmed OULEDI Photographies « Les Comores de 1900 à 2011 - Potentiels et Richesses »
                </p>
                </div>

        </div>
    );
}

export default Edition2012;
