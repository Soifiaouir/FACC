import './App.css';
import {Outlet} from "react-router-dom";
import Apropos from './pages/apropos/Apropos';
import CarrousselP from './components/caroussels/carousselP/CarrousselP';



function App() {
  return (
    <div className="App">
      {/* <Outlet /> */}
      {/* <Apropos /> */}
      < CarrousselP visibleImages={3}/>
    </div>
  );
}

export default App;
