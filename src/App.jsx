import './App.css';
import {Outlet} from "react-router-dom";
import Apropos from './pages/Apropos/Apropos';


function App() {
  return (
    <div className="App">
      {/* <Outlet /> */}
      <Apropos />
    </div>
  );
}

export default App;
