import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Acceuil from './pages/acceuil/acceuil';
import Artistes from './pages/artistes/Artistes'
import Apropos from './pages/apropos/Apropos';
import ContactForm from './pages/contact/Contact';
import Localisation from './pages/lieu/Lieux';
import ArtisteDetail from './pages/artistes/artdet/ArtistesDetails';
import Edition2024 from './pages/2024/Edition2024';
import MentionLegal from './pages/ml/MentionLegal';
import Edition2012 from './pages/2012/Edition2012';
import Edition2014 from './pages/2014/Edition2014';
import Edition2016 from './pages/2016/Edition2016';
import Edition2018 from './pages/2018/Edition2018';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <CookiesProvider>
        <Router>
          <Routes>
            <Route path= "/" element={<App />}>
              <Route index element={<Acceuil />} />
              <Route path="accueil" element={<Navigate replace to="/" />} />
              <Route path="Edition2024" element={<Edition2024 />} />
              <Route path="Artistes" element={<Artistes />} />
              <Route path="Edition2012" element={<Edition2012 />} />
              <Route path="Edition2014" element={<Edition2014 />} />
              <Route path="Edition2016" element={<Edition2016 />} />
              <Route path="Edition2018" element={<Edition2018 />} />
              <Route path="Contact" element={<ContactForm />} />
              <Route path="Apropos" element={<Apropos />} />
              <Route path="MentionLegal" element={<MentionLegal />} />
              <Route path="Localisation" element={<Localisation />} />
              <Route path="ArtisteDetails" element={<ArtisteDetail />} />
            </Route>
          </Routes>
        </Router>
      </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
