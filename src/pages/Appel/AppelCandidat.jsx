import React from "react";
import './AppelCandidat.css';
import BoutonTelecharger from "../../components/boutons/boutonT/boutonT";

const AppelCandidature = () => {
  return (
    <div className="Appel">
      <h2>Appel à Candidature</h2>
      <p className="topapp">
        Nous avons le plaisir de vous transmettre les informations nécessaires pour participer à la prochaine édition du FACC.
        <br />
        L’équipe en charge du recrutement des artistes vous contactera dans les plus brefs délais après réception des documents requis.
        <br />
        Vous trouverez ci-joint le détail des éléments à nous retourner afin de faciliter l’organisation de votre venue.
        <br />
      </p>
      
      <h3>Formulaire de Candidature</h3>
      <p className="topapp">
        L’artiste souhaitant présenter sa candidature pour le FACC 2024 doit remplir la présente fiche de candidature.
        <br />
        Le simple fait de participer au Festival implique l’acceptation pure et simple du règlement ainsi que l’abandon des droits de reproduction des œuvres qui figureront dans tous les supports de communications et de reproductions du Festival d’Arts Contemporains de Comores (catalogue, site internet, médias...).
        <br />
      </p>
      
      <b>PIÈCES À JOINDRE AU DOSSIER DE CANDIDATURE</b>
      <ul className="topapp">
        <li>CV</li>
        <li>Texte explicatif de la démarche artistique</li>
        <li>4 reproductions couleurs 300 dpi (photographies, vidéo, CD-ROM, DVD...) significatives du travail proposé en précisant les titres, les dimensions et techniques de l’œuvre.</li>
        <li>Photocopie du passeport en cours de validité.</li>
      </ul>

      <div className="bt">
        <BoutonTelecharger 
          fileName="appel à candidature"
          fileUrl="https://drive.google.com/file/d/12A7vEkZugKALhX-lYbyBhY-syHB4FrFm/view?usp=sharing" 
        />      
      </div>

      <div className="limite">
        <h4>Date limite d'envoi</h4>
        <p className="topapp">
          Ce dossier est à retourner par e-mail dûment complété avant le 
          <b> 05 octobre 2024</b> par mail à l'adresse <a href="mailto:f.acc@hotmail.fr">f.acc@hotmail.fr</a>.
          <br />
          Tout dossier incomplet ne sera pas pris en compte.
          <br />
          Pour tous renseignements, vous pouvez contacter le secrétariat du F.A.C.C au : +262 639 23 84 65 / +269 342 84 65
        </p>
      </div>

      <h4>Envoi et Réception des Œuvres</h4>
      <p className="topapp">
        Les œuvres sélectionnées pourront être expédiées à l’adresse :
        <br />
        28 rue Madi MCHE
        <br />
        97600 – Mtsapéré - Mamoudzou
        <br />
        Mayotte
        <br />
        Siège de l’association Zangoma, partenaire du Festival d’Arts Contemporains des Comores.
        <br />
        <br />
        La réception des œuvres se fera impérativement aux dates suivantes :
        <br />
        <b>15 OCTOBRE 2024</b>
      </p>
    </div>
  );
};

export default AppelCandidature;
