import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import LoginAndRegister from './components/pages/LoginAndRegister'

function App() {
  return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element ={<Home/>} />
            <Route path="/Sign" element={<LoginAndRegister/>} />
          </Routes>
          <Footer />
        </Router>
      </>

  );
}

export default App;