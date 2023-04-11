import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import About from "./components/About"
import Television from './components/Television';
import Shop from './components/Shop';
import Gallery from './components/Gallery';
import Pages from './components/Pages';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/about' element={<About />} /> 
        <Route path='/television' element={<Television />} /> 
        <Route path='/shop' element={<Shop />} /> 
        <Route path='/gallery' element={<Gallery />} /> 
        <Route path='/pages' element={<Pages />} /> 
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
