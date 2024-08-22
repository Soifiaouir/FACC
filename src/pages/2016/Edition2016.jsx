import React from "react";
import './Edition2016.css';
import troisieme from '../../assets/Invitation/3eme.png';
import CarouselA from "../../components/caroussels/carousselA/CarouselA";
import Caroussel2016O from "../../components/caroussels/carousselU/caroussels/caroussel2016/Caroussel2016O";
import Caroussel2016B from "../../components/caroussels/carousselU/caroussels/caroussel2016/Caroussel2016B";

    const Edition2016 = () => {

        return (
            <div className="Edition 2016">
                <h2>Edition 2016</h2>

                <div>
                    <h3>Troisième Edition</h3>
                    <div className="troistop">
                        <div className="troisiemetop">
                            <p>
                            La 3ème édition du Festival d'Arts Contemporains des Comores (FACC), également connue sous le nom de Hudjijuwa, s'est tenue du 14 au 17 octobre 2016 à Moroni. Cet événement bisannuel, devenu incontournable dans l'Océan Indien, a poursuivi son ancrage dans le paysage culturel de l'archipel avec l'ambition de démocratiser l'expérience artistique.<br/>
                            Sous le thème "Couleurs de femme, femmes de couleur", cette édition a proposé une réflexion sur la place de la femme dans nos sociétés et dans l'art contemporain. Le festival a réuni des artistes et intellectuels du monde entier, avec une forte représentation de l'Océan Indien, dans le but de dynamiser la création artistique aux Comores.
                            </p>
                            <img src={troisieme} alt="invitaion au fac 2016" className="trois" />
                        </div>
                            <p>
                            Le FACC 2016 a mis en valeur l'originalité et la modernité de l'art comorien tout en favorisant les échanges avec des artistes internationaux. Des œuvres ont été exposées dans des lieux traditionnels, mais aussi installées en extérieur pour surprendre le public dans son quotidien.<br/>
                            Cette édition s'est également étendue au-delà de Moroni grâce aux Manifestations de Territoires, permettant à des villes n'ayant jamais accueilli d'événements internationaux de participer à cette effervescence culturelle. Le festival a ainsi visé à promouvoir l'image d'un archipel dynamique, moderne et riche de sa diversité culturelle.
                            </p>
                        </div>
                    </div>

                    <div className="A2016">
                    <h3>Les artistes</h3>
                        <div className="Artistes2016">
                            <p>
                            Cette événement avait rassemblé une impressionnante sélection d'artistes internationaux, reflétant la diversité et le dynamisme de la scène artistique contemporaine de l'océan Indien et au-delà.<br/>
                            Une grande variété de disciplines artistiques ont été mis en lumière en offrant au public une expérience riche et multiforme. Les visiteurs ont pu découvrir des œuvres allant des arts visuels traditionnels aux expressions plus contemporaines, incluant la performance, les arts urbains, les installations, les arts numériques, l'architecture, l'urbanisme et le design.<br/>
                            Parmi les 45 artistes sélectionnés, on comptait des créateurs venus des Comores (Grande Comore, Anjouan, Mohéli), mais aussi de Mayotte, de La Réunion, de France métropolitaine, du Japon, d'Éthiopie, de Guyane et des Seychelles. <br/>
                            Cette diversité géographique a permis des échanges culturels fructueux et a offert un panorama étendu de l'art contemporain.<br/>
                            Des artistes de renom tels que Kadiatou Kante, Emmanuel Colinet, Moniri Mbae et Masami Yamazaki ont côtoyé des talents émergents, créant un dialogue intergénérationnel et interculturel stimulant. La présence d'artistes reconnus a conféré au festival une portée dépassant l'échelle locale et régionale, le positionnant comme un événement majeur dans le paysage artistique de l'océan Indien.
                            Cette édition du FACC a ainsi réaffirmé son rôle de plateforme d'échange et de découverte, mettant en valeur la richesse et la diversité de l'expression artistique contemporaine, tout en offrant aux artistes comoriens une opportunité unique de se confronter à la scène internationale.
                            </p>
                            <CarouselA artisteIds={[1, 3, 5]} />
                        </div>                        
                    </div>


                    <div className="School2016">                    
                        <h3>Implication Scolaire</h3>
                            <h4>Implication Scolaire : L'Art à l'École</h4>
                                <p>Le Festival d'Arts Contemporains des Comores (F.A.C.C) s'engage à créer des liens entre le monde scolaire, l'art et la science à travers des actions pédagogiques innovantes.</p>
                            <h4>Préparation au Festival</h4>
                                <ul>
                                    <li>Les enseignants d'arts plastiques et d'histoire travaillent sur le thème du festival avec leurs élèves plusieurs mois à l'avance</li>
                                    <li>Des artistes interviennent dans les écoles pour guider les projets créatifs des élèves</li>
                                </ul>
                            <h4>Découverte et Création</h4>
                            <ul>
                                <li>Les jeunes explorent un nouvel univers artistique</li>
                                <li>Ils expérimentent directement la relation aux œuvres</li>
                                <li>Ils développent leur créativité et leur compréhension de l'art contemporain</li>
                            </ul>
                            
                            <h4>Concours et Récompenses</h4>
                            <ul>
                                <li>Les travaux des élèves sont exposés lors des Manifestations de Territoires</li>
                                <li>Un concours sélectionne 3 lauréats par discipline (arts plastiques et histoire)</li>
                                <li>Les gagnants accompagnent les artistes sélectionnés à Moroni</li>
                            </ul>
                            <h4>Grande Finale</h4>
                            <ul>
                                <li>Un concours international se tient à l'Université des Comores</li>
                                <li>Il réunit les lauréats de tous les territoires partenaires</li>
                                <li>Les gagnants finaux sont élus pour représenter l'édition 2016 du festival</li>
                            </ul>
                            <p>Cette approche dynamique permet au F.A.C.C de toucher un large public, notamment les jeunes qui représentent 60% de la population, tout en promouvant la créativité et l'innovation dans l'archipel.</p>
                            <Caroussel2016O />
                        </div>


                    <div className="Science2016">
                        <div className="Aspect2016">
                            <h3>Aspect Scientifique</h3>
                                <p>
                                    Cette approche pluridisciplinaire a enrichi l'expérience du festival et a offert une perspective plus profonde sur la culture et l'histoire des Comores.<br/>
                                    L'aspect scientifique du FACC s'est manifesté à travers plusieurs initiatives :
                                </p>
                                <p>    
                                    <b>Forum scientifique :</b> <br/>Un espace de dialogue où des experts locaux et internationaux se sont réunis pour discuter de sujets pertinents liés au thème du festival. Ces discussions ont abordé l'histoire, la sociologie, l'archéologie et l'anthropologie des Comores et de la région.<br/>
                                    <b>Expositions thématiques:</b><br/> En parallèle des œuvres d'art, des expositions scientifiques ont été organisées pour illustrer les sujets abordés lors du forum. Ces expositions ont offert une perspective visuelle et interactive sur l'histoire et la culture comoriennes.<br/>
                                    <b>Conférences et présentations : </b><br/>Des scientifiques renommés ont été invités à partager leurs recherches et leurs réflexions, apportant une dimension académique au festival. <br/>
                                    <b>Lien entre art et science :</b><br/> Le festival a cherché à créer des ponts entre l'expression artistique et la recherche scientifique, encourageant une réflexion plus profonde sur l'identité comorienne et son rapport au monde.<br/>
                                    <b>Participation d'experts internationaux :</b><br/> La présence de penseurs et de chercheurs du monde entier a assuré une diversité de perspectives et a enrichi le débat.
                                </p>  
                                <p> Cette approche scientifique du FACC a visé à approfondir la compréhension de soi et des autres, en explorant l'histoire et la culture des Comores dans un contexte plus large. Elle a contribué ainsi à la mission du festival de promouvoir la connaissance, l'ouverture d'esprit et le dialogue interculturel.</p>  
                        </div>
                    </div>
                        <Caroussel2016B />

                    
                
            </div>

        );
    };

export default Edition2016;