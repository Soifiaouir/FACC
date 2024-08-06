import './App.css';
import {Outlet} from "react-router-dom";
import Acceuil from './pages/acceuil/acceuil';
import Artistes from './pages/artistes/Artistes';




function App() {
  return (
    <div className="App">
      {/* <Outlet /> */}
      {/* < Acceuil />*/}
    
   <Artistes />
      
    </div>
  );
}

export default App;
