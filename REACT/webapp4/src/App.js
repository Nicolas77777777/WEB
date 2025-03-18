import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link,} from "react-router-dom";

import './App.css';
import Contatti from './Contatti';
import Su_di_me from './Su_di_me';

function App() {
  return (


    <BrowserRouter>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Chi Siamo</Link></li>
          <li><Link to="/contact">Contatti</Link></li>
        </ul>
      </nav>

      <Routes>
          <Route path='/about' Component={Su_di_me}></Route>
          <Route path='/contact' Component={Contatti}></Route>
      </Routes>

    </BrowserRouter>



  

  


    


    
  );
}

export default App;
