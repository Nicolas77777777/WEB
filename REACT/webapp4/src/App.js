import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link,} from "react-router-dom";

import './App.css';
import Contatti from './Contatti';
import Su_di_me from './Su_di_me';
import Home from './Home';
import ChiSiamo from './ChiSiamo';

function App() {
  return (


    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<Su_di_me />} />
      <Route path='/contact' element={<Contatti />} />
      <Route path='/chisiamo' element={<ChiSiamo />} />
    </Routes>
  </BrowserRouter>



  

  


    


    
  );
}

export default App;
