import './App.css';
import {Outlet} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from './components/footer/Footer';
import Edition2012 from './pages/2012/Edition2012';
import CarousselU from './components/caroussels/carousselU/CarousselU';




function App() {
  return (
    <div className="App">
      
      <Header />
       {/* <Outlet />   */}
       < Edition2012 />
         <Footer />
    </div>
  );
}

export default App;
