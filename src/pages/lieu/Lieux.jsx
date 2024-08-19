import React from "react";
import './Lieux.css';
import oasis from "../../assets/Lieux/ao-6.webp";
import CNDRS from "../../assets/Lieux/CNDRS.jpeg";
import Palais from "../../assets/Lieux//Palais-600x381.jpg";
import Badjani from "../../assets/Lieux/badjannani_masjid_1.jpg";
import foyer from "../../assets/Lieux/foyerfemmesmoroni.jpg";
import medina from "../../assets/Lieux/medina.jpg";
import usine from "../../assets/Lieux/usine.png";
import univ from "../../assets/Lieux/UNIV.jpg";

const Localisation = () => {
    return(
        <div className="donde">
            <h2>Lieux</h2>
            
            <div className="lugar"><img src={CNDRS} alt='CNDRS' /></div>    
            <h3>CNDRS</h3>
            <p>Le Centre National de Documentation et de Recherche Scientifique (CNDRS) des Comores, fondé le 11 janvier 1979, joue un rôle essentiel dans le développement de la recherche en sciences humaines et naturelles. Cette institution a pour mission de promouvoir la recherche, de former de nouveaux chercheurs comoriens et de préserver la culture nationale.<br/> En tant que gardien de la mémoire du pays, le CNDRS abrite la Bibliothèque nationale des Comores, bien qu'elle fasse face à des défis en matière de conservation.<br/> Souvent décrit comme "l'âme des Comores", le CNDRS est un incubateur de connaissances qui organise régulièrement des événements pour encourager les jeunes à s'engager dans des carrières scientifiques, tout en servant de pont entre le passé et l'avenir du pays.</p>
       
            <div className="lugar"><img src={Badjani} alt='Place Badjani' /></div>    
            <h3>Place Badjani</h3>
            <p>La place Badjanani est un lieu central et emblématique de Moroni, la capitale des Comores. Elle est située à proximité du vieux port et constitue un point d'accès au quartier historique de la médina. <br/>Ce quartier, connu pour ses ruelles étroites et ses escaliers, est riche en histoire et en culture. La place est entourée de bâtiments historiques, dont la célèbre mosquée Badjanani, la plus ancienne de la ville, qui date de 1427.<br/> Cette mosquée, avec son architecture arabo-musulmane, est un important lieu de culte et un site touristique apprécié. La médina elle-même est un mélange vibrant de vie quotidienne, avec de petites échoppes vendant des vêtements, des tissus et des produits artisanaux, ainsi que des artisans bijoutiers et cordonniers.</p>

            <div className="lugar"><img src={medina} alt='Medina' /></div>    
            <h3>Medina</h3>
            <p>Le Vieux Moroni, surnommé "médina", est le quartier historique de la capitale comorienne, caractérisé par ses ruelles étroites et ses escaliers menant à la place Badjanani, près du vieux port. Ce lieu est marqué par des arches sculptées et des portes décorées, témoignant de son passé princier, avec de petites cours ombragées derrière ces façades.<br/> La vie y est animée par de petites échoppes vendant vêtements et marchandises, ainsi que des artisans bijoutiers et cordonniers. Les fontaines publiques servent aux ablutions des habitants, et les enfants n'acceptent des friandises qu'avec l'autorisation de leurs parents. Les habitants, accueillants, partagent volontiers leur connaissance du quartier avec les visiteurs.</p>
     
            <div className="lugar"><img src={usine} alt='Ancienne usine désaffectée : Salimani' /></div>    
            <h3>Ancienne usine désaffectée : Salimani</h3>
            <p>L'ancienne usine désaffectée de Salimani est un site emblématique de l'histoire industrielle des Comores. Bien que les résultats de recherche ne fournissent pas d'informations détaillées sur cette usine en particulier, on peut supposer qu'elle a joué un rôle important dans le développement économique de la région. <br/>Les usines désaffectées, comme celle de Salimani, témoignent souvent d'une époque où l'industrialisation était en plein essor, et elles peuvent servir de rappels des défis économiques et sociaux que les communautés ont rencontrés. Ces sites peuvent également être des lieux de mémoire, où l'on se souvient des travailleurs qui ont contribué à l'essor de l'industrie locale.<br/>En général, les anciennes usines peuvent être réhabilitées pour servir de centres culturels, d'espaces artistiques ou de lieux de rencontre, contribuant ainsi à revitaliser les communautés locales.</p>
        
            <div className="lugar"><img src={foyer} alt='Foyer des Femmes' /></div>     
            <h3>Foyer des Femmes</h3>
            <p>Le Foyer des Femmes est un lieu important pour la communauté féminine de Moroni. Bien que les détails spécifiques ne soient pas fournis, ces types d'établissements jouent généralement un rôle crucial dans l'autonomisation des femmes, offrant des espaces pour l'éducation, la formation professionnelle, et le soutien social. C'est souvent un lieu de rassemblement où les femmes peuvent partager leurs expériences, développer leurs compétences et trouver du soutien.</p>
        
            <div className="lugar"><img src={univ} alt='Université des Comores' /></div>    
            <h3>Université des Comores</h3>
            <p>L'Université des Comores, fondée en 2003, est un établissement d'enseignement supérieur situé à Mvouni, près de Moroni. Elle a été créée pour répondre aux besoins éducatifs des Comores, permettant aux étudiants de poursuivre leurs études supérieures sans avoir à se rendre à l'étranger. L'université compte environ 15 546 étudiants (en 2017) et offre une variété de formations organisées en plusieurs facultés et instituts répartis sur différents sites.<br/>L'université est structurée autour de quatre facultés : la faculté de droit et des sciences économiques, la faculté des lettres et des sciences humaines, la faculté des sciences et techniques, et la faculté IMAM CHAFIOU, dédiée aux lettres arabes et aux sciences islamiques. Elle comprend également des instituts de formation en éducation, en technologie et en santé publique.</p>
        
            <div className="lugar"><img src={Palais} alt='Le Palais du Peuple' /></div>    
            <h3>Le Palais du Peuple</h3>
            <p>Le Palais du Peuple, situé à Moroni sur l'île de Grande Comore, est un symbole de la démocratie comorienne. Édifice emblématique, il abrite l'Assemblée nationale, où se prennent les décisions politiques cruciales du pays. Construit il y a plusieurs décennies, le bâtiment a subi plusieurs rénovations, la plus récente ayant duré 20 mois, témoignant de son importance dans la vie politique comorienne. En plus de son rôle législatif, le Palais du Peuple est également le lieu de rassemblements et de manifestations, illustrant ainsi son rôle central dans la société. Avec son architecture distinctive, il incarne l'engagement du peuple comorien envers la démocratie et la gouvernance.</p>
        
            <div className="lugar"><img src={oasis} alt="L'arène de L'oasis"/></div>    
            <h3>L'arène de L'oasis</h3>
            <p>L'Oasis, situé à Moroni, la capitale des Comores, est un quartier paisible et enchanteur. Entouré de végétation luxuriante, il offre des vues imprenables sur l'océan Indien. <br/>Ce lieu vibrant de culture comorienne abrite des marchés locaux et des restaurants servant des plats traditionnels. Facilement accessible depuis le centre-ville, L'Oasis est un havre de tranquillité, parfait pour se détendre et profiter de la beauté naturelle des Comores.</p>
        </div>
    );
}

export default Localisation;