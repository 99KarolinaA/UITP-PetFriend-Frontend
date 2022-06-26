
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import PetFriendFind from './components/pages/PetFriendFind';

function App() {
  return (
    <>
    <Router>
     <Navbar />
     <Routes>
       <Route path='/' element ={<Home/>} />
       <Route path='PetFriendFind' element ={<PetFriendFind/>} />
     </Routes>
     <Footer />
     </Router>
      </>
     
  );
}

export default App;
