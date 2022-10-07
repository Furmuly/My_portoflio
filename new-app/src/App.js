import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { Home } from '@material-ui/icons';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
//import Navbar from './components/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './pages/Layout';


function App() {
  return (
    <div className="App">
      <Router>
        <Layout />
        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Skills' element={<Skills />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>


  );
}

export default App;
