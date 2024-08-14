import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Acceuil from './pages/acceuil/acceuil';
import Edition2024 from './pages/edition2024/Edition2024';
import Artistes from './pages/artistes/Artistes'
import Edition2012 from './pages/2012/Edition2012';
import Apropos from './pages/apropos/Apropos';
import ContactForm from './pages/contact/Contact';
import Localisation from './pages/lieu/Lieux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path= "/" element={<App />}>
          <Route index element={<Acceuil />} />
          <Route path="accueil" element={<Navigate replace to="/" />} />
          <Route path="Edition2024" element={<Edition2024 />} />
          <Route path="Artistes" element={<Artistes />} />
          <Route path="Edition2012" element={<Edition2012 />} />
          <Route path="Contact" element={<ContactForm />} />
          <Route path="Apropos" element={<Apropos />} />
          <Route path="Localisation" element={<Localisation />} />

        </Route>
      </Routes>
    </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
