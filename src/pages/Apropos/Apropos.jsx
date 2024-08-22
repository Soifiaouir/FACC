import React from 'react';
import Video from '../../components/video/video';
import './Apropos.css';

function Apropos() {
  return (

    <div className="about-content">
      <h2>À propos du FACC</h2> 
      <div class="vidéo"><iframe width="695" height="391" src="https://www.youtube.com/embed/xd360nVmSwg" title="Teaser FACC   MP 13" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
        <p>Le <strong>Festival d'Art Contemporain des Comores (FACC)</strong> est un événement biennal fondé par Fatima Ousseni et son époux Denis Balthazar en 2012, destiné à promouvoir et valoriser l'art contemporain aux Comores. Créé pour répondre à plusieurs besoins spécifiques, le FACC vise à réunir les artistes comoriens et à les faire connaître tant au public local qu'international.</p>
      
      <h3>Origines du FACC</h3>
        <p>Fatima et Denis ont fondé le FACC pour répondre à plusieurs besoins identifiés :
        <ul>
          <li>Le manque de reconnaissance des artistes comoriens par le public local.</li>
          <li>La reconnaissance des talents comoriens principalement par des étrangers.</li>
          <li>Le manque de synergie entre les différents groupes d'artistes comoriens.</li>
          <li>Un marché de l'art limité aux Comores avec très peu d'acheteurs.</li>
        </ul>
        En créant le FACC, Fatima Ousseni a souhaité "unir les artistes comoriens et leur permettre d'aller à la rencontre du public".</p>
        
      <h3>Developpement et Impact</h3>
        <p>Le FACC a été conçu pour valoriser l'art comorien et stimuler la vie artistique locale.<br/>
          Il bénéficie du soutien d'organismes publics comme le Centre National de la Documentation et de la Recherche Scientifique, l'Université des Comores, ainsi que d'associations et initiatives privées. Le festival est placé sous le haut patronage du Ministère de l'Éducation Nationale, de la Recherche, de la Culture, et des Arts de l'Union des Comores, et est parrainé à chaque édition par une personnalité de renommée internationale.
          Le festival, gratuit et ouvert à tous, vise à :
          <ul>
            <li>Réunir des créateurs de tendances variées :<br/>Le FACC permet de rassembler des artistes souvent isolés et de les exposer à un large public.</li>
            <li>Promouvoir les échanges internationaux :<br/>Il encourage les échanges avec des pratiques artistiques développées à travers le monde.</li>
            <li>Stimuler la participation locale et internationale :<br/>Le festival a vu une augmentation régulière de la participation des artistes locaux et internationaux, ainsi qu'un accroissement des visiteurs jeunes et adultes.</li>
          </ul>
        </p>
        <div class="vidéo"><Video videoUrl="https://www.facebook.com/Facdescomores/videos/946772079629835/" /></div> 
      
      <h3>Éditions et Activités</h3>
        <p>La cinquième édition du FACC, célébrée en novembre 2022, marquait les dix ans de l'événement depuis sa création en 2012. Cette édition, sous le thème "Nous, si on parlait du bonheur", a mis en avant les contributions des acteurs culturels et socioculturels comoriens dans les arts visuels.
            Le FACC inclut diverses activités telles que des expositions, des tables-rondes explorant les complexités identitaires de l'archipel, des concerts, et des représentations théâtrales. Ces activités visent à désenclaver la culture et l'art comorien, tout en offrant une plateforme pour les artistes émergents.
            En conclusion, le FACC joue un rôle crucial dans la promotion de l art contemporain aux Comores, en offrant une visibilité accrue aux artistes locaux et en stimulant les échanges culturels à l échelle internationale.
        </p>
    </div>
  );
}

export default Apropos;