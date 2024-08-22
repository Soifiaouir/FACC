import React from 'react';
import './MentionLegal.css';

const MentionLegal = () => {
  return (
    <div className="legal-notice-container">
      <h2>Mentions Légales</h2>

      <h3>1. Informations générales</h3>
      <div className="section-content">
        <p>
          <strong>Éditeur du site :</strong> Festival d'Art Contemporain des Comores<br />
          Téléphone : +269639238465<br />
          Email : f.acc@hotmail.fr<br />
        </p>
        <p>
          <strong>Hébergeur :</strong> OVHcloud<br />
          2 Rue Kellermann, 59100 Roubaix, France
        </p>
        <p>
          <strong>Directeur de la publication :</strong> Soifia OUIRDANE
        </p>
      </div>

      <h3>2. Propriété intellectuelle</h3>
      <p>
        L'ensemble du contenu de ce site (textes, images, vidéos, etc.) est protégé par le droit d'auteur. Toute reproduction ou utilisation sans autorisation écrite préalable est strictement interdite.
      </p>

      <h3>3. Protection des données personnelles</h3>
      <h4>Collecte et utilisation des données</h4>
      <p>
        Nous collectons les données suivantes : nom, prénom, adresse email, via notre formulaire de contact. Ces données sont utilisées uniquement pour répondre à vos demandes et sont conservées pendant 3 ans à compter de notre dernier contact.
      </p>
      <h4>Base légale</h4>
      <p>
        Le traitement de vos données est basé sur votre consentement et notre intérêt légitime à répondre à vos demandes.
      </p>
      <h4>Droits des utilisateurs</h4>
      <p>
        Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, et de portabilité de vos données. Vous pouvez exercer ces droits en nous contactant à privacy@festivalartcomores.com. Vous avez également le droit d'introduire une réclamation auprès de la CNIL.
      </p>

      <h3>4. Cookies</h3>
      <p>
        Notre site utilise des cookies techniques essentiels au fonctionnement du site et des cookies analytiques (Google Analytics) pour améliorer votre expérience. Vous pouvez gérer vos préférences via le bandeau de consentement affiché sur le site.
      </p>

      <h3>5. Utilisation d'EmailJS</h3>
      <p>
        Notre formulaire de contact utilise le service EmailJS. Les données transmises via ce formulaire sont traitées conformément à la <a href="https://www.emailjs.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">politique de confidentialité d'EmailJS</a>.
      </p>

      <h3>6. Responsabilité</h3>
      <p>
        Malgré nos efforts pour assurer l'exactitude des informations, nous ne pouvons garantir l'absence d'erreurs. Nous déclinons toute responsabilité quant au contenu des sites externes vers lesquels nous proposons des liens.
      </p>

      <h3>7. Loi applicable et juridiction</h3>
      <p>
        Les présentes mentions légales sont soumises à la loi comorienne. En cas de litige, les tribunaux comoriens seront seuls compétents.
      </p>

      <p><em>Dernière mise à jour : 15 août 2024</em></p>
    </div>
  );
};

export default MentionLegal;