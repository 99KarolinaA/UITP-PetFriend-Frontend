import Navbar from './components/helperComponents/Navbar';
import Footer from './components/helperComponents/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/homepage/Home';
import LoginAndRegister from './components/pages/loginAndRegisterPage/LoginAndRegister'
import AdminPage from "./components/pages/AdminPage";
import PetfriendProfile from "./components/pages/PetfriendProfile";
import PetOwnerProfile from "./components/pages/PetOwnerProfile";

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
                    <Route path="/PetOwnerProfile" element={<PetOwnerProfile/>}/>
                </Routes>
                <Footer/>
            </Router>
        </>

    );
}

export default App;