import './App.css';
import {Outlet} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from './components/footer/Footer';
import CookieBanner from './components/cookies/CookiesBanner';



function App() {
  return (
    <div className="App">
      <CookieBanner />
        <Header />
        <Outlet /> 
        <Footer />
    </div>
  );
}

export default App;
