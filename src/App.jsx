import './App.css';
import {Outlet} from "react-router-dom";
import Countdown from './components/compteurs/Compteur';

const eventDate = "2025-10-10T15:15:00";

function App() {
  return (
    <div className="App">
      {/* <Outlet /> */}
      <Countdown eventDate={eventDate}/>
    </div>
  );
}

export default App;
