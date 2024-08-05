import './App.css';
import {Outlet} from "react-router-dom";
import CarrousselImg from './components/caroussels/carrousselimg/Carrousselimg';



function App() {
  return (
    <div className="App">
      {/* <Outlet /> */}
      <CarrousselImg />
    </div>
  );
}

export default App;
