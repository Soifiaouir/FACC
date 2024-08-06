import './App.css';
import {Outlet} from "react-router-dom";
import Acceuil from './pages/acceuil/acceuil';


function App() {
  return (
    <div className="App">
      {/* <Outlet /> */}
      < Acceuil />    
     
      
    </div>
  );
}

export default App;
