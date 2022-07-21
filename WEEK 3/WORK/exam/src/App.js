import Navbar from './components/Navbar.components';
import Header from './components/Header.components';
import Footer from './components/Footer.components';
import Notfound from './pages/notfound.pages';
import { BrowserRouter as Router,Routes,Route,  } from 'react-router-dom';
import Home from './Home';
import './App.css';

function App() {
  return (
    <div className="App">
     <Router>

     <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<Notfound/>}/>

      </Routes>
      <Footer/>
     </Router>

    

     
     
     <Notfound/>
    
    </div>
  );
}

export default App;
