import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import BoutonE from '../../components/boutons/boutonE/BoutonE';
import './Contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_p7ohbk6', // Remplacez par votre Service ID
      'template_8hl1fpr', // Remplacez par votre Template ID
      formData,
      'sR71DfBVDD2tSU3ah' // Remplacez par votre User ID
    )
    .then((result) => {
      console.log('Email envoyé avec succès:', result.text);
      alert('Message envoyé avec succès!');
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
              placeholder="Entrez votre prénom" // Placeholder ajouté
              required
            />
          </div>
          <div className='prenom'>
          
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Entrez votre nom" // Placeholder ajouté
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
              placeholder="Entrez votre email" // Placeholder ajouté
              required
            />
          </div>
          <div>
          
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Entrez votre numéro de téléphone" // Placeholder ajouté
              required
            />
          </div>
          <div>
          
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Écrivez votre message ici..." // Placeholder ajouté
              required
            />
          </div>
          <div  className='centre'>
          <BoutonE onClick={handleSubmit}>Envoyez</BoutonE>
          </div>
        </form>
      </div>
  );
};

export default ContactForm;