import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import LoginAndRegister from './components/pages/LoginAndRegister'
import AdminPage from "./pages/AdminPage";
import PetfriendProfile from "./pages/PetfriendProfile";

function App() {
    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path="/Sign" element={<LoginAndRegister/>}/>
                    <Route path="/Admin" element={<AdminPage/>}/>
                    <Route path="/PetFriendProfile" element={<PetfriendProfile/>}/>
                </Routes>
                <Footer/>
            </Router>
        </>

    );
}

export default App;