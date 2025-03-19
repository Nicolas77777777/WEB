import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link,} from "react-router-dom";

import './App.css';
import Contatti from './Contatti';
import Su_di_me from './Su_di_me';
import Home from './Home';
import ChiSiamo from './ChiSiamo';
import Contatti2 from './Contatti2';

function App() {
  return (


    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<Su_di_me />} />
      <Route path='/contact' element={<Contatti />} />
      <Route path='/chisiamo' element={<ChiSiamo />} />
      <Route path='/contact2' element={<Contatti2 />} />

    </Routes>
  </BrowserRouter>



  

  


    


    
  );
}

export default App;
