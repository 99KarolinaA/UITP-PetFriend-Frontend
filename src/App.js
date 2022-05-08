import logo from './logo.svg';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';

function App() {
  return (
    <>
    <Router>
     <Navbar />
     <Routes>
       <Route path='/' element ={<Home/>} />
     </Routes>
     <Footer />
     </Router>
      </>
     
  );
}

export default App;
