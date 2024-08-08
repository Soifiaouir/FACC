import './App.css';
import {Outlet} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from './components/footer/Footer';
import ContactForm from './pages/contact/Contact';


function App() {
  return (
    <div className="App">
      
      <Header />
      {/* <Outlet /> */}
      <ContactForm />
      <Footer />
        
    </div>
  );
}

export default App;
