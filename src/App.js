import 'bootstrap/dist/css/bootstrap.css';
import react, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Header from './components/header';
import Kirjaudu from './sivut/kirjaudu';
import Koti from './sivut/koti';
import UusiAsiakas from './sivut/uusiAsiakas';
import Varasto from './sivut/varasto';


function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="container">
      <Router>
        <Header/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Kirjaudu setUser={setUser} />}/>
          <Route path="/sivut/koti" element={<Koti />}/>
          <Route path="/sivut/uusiAsiakas" element={<UusiAsiakas/>}/>
          <Route path="/sivut/varasto" element={<Varasto/>}/>
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
