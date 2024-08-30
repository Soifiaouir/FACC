import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { useCookies } from 'react-cookie';
import BoutonE from '../../components/boutons/boutonE/BoutonE';
import './Contact.css';

// Importez ces constantes depuis un fichier de configuration sécurisé
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_USER_ID } from '../../config';

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (cookies.consentement) {
      setConsentement(true);
    }
  }, [cookies.consentement]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setConsentement(checked);
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!consentement) {
      alert("Veuillez accepter la politique de confidentialité pour envoyer le message.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Validation côté client
      if (!validateForm(formData)) {
        throw new Error("Formulaire invalide");
      }

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formData,
        EMAILJS_USER_ID
      );

      console.log('Email envoyé avec succès:', result.text);
      alert('Message envoyé avec succès!');
      setCookie('consentement', true, { path: '/', maxAge: 31536000, secure: true, sameSite: 'strict' });

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      alert('Erreur lors de l\'envoi du message. Veuillez réessayer plus tard.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Fonction de validation du formulaire
  const validateForm = (data) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!data.firstName || !data.lastName || !data.email || !data.phone || !data.message) {
      alert("Tous les champs sont obligatoires.");
      return false;
    }

    if (!emailRegex.test(data.email)) {
      alert("Veuillez entrer une adresse email valide.");
      return false;
    }

    if (!phoneRegex.test(data.phone)) {
      alert("Veuillez entrer un numéro de téléphone valide (10 chiffres).");
      return false;
    }

    return true;
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
          <BoutonE type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Envoi en cours...' : 'Envoyez'}
          </BoutonE>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;