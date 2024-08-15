import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { useCookies } from 'react-cookie';
import BoutonE from '../../components/boutons/boutonE/BoutonE';
import './Contact.css';

const ContactForm = () => {
  const [cookies, setCookie] = useCookies(['consentement']);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [consentement, setConsentement] = useState(false);

  useEffect(() => {
    // Vérifier si le consentement a déjà été donné
    if (cookies.consentement) {
      setConsentement(true);
    }
  }, [cookies.consentement]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setConsentement(checked);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!consentement) {
      alert("Veuillez accepter la politique de confidentialité pour envoyer le message.");
      return;
    }

    emailjs.send(
      'service_p7ohbk6',
      'template_8hl1fpr',
      formData,
      'sR71DfBVDD2tSU3ah'
    )
    .then((result) => {
      console.log('Email envoyé avec succès:', result.text);
      alert('Message envoyé avec succès!');
      // Enregistrer le consentement dans un cookie
      setCookie('consentement', true, { path: '/', maxAge: 31536000 }); // 1 an
    }, (error) => {
      console.error('Erreur lors de l\'envoi de l\'email:', error.text);
      alert('Erreur lors de l\'envoi du message.');
    });

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div className='contact'>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className='identite'>
          <div className='nom'>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Entrez votre prénom"
              required
            />
          </div>
          <div className='prenom'>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Entrez votre nom"
              required
            />
          </div>
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Entrez votre email"
            required
          />
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Entrez votre numéro de téléphone"
            required
          />
        </div>
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Écrivez votre message ici..."
            required
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="consentement"
              checked={consentement}
              onChange={handleChange}
              required
            />
            J'accepte la politique de confidentialité et le traitement de mes données personnelles.
          </label>
        </div>
        <div className='centre'>
          <BoutonE type="submit">Envoyez</BoutonE>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;