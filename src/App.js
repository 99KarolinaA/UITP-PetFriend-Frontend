import Navbar from './components/helperComponents/Navbar';
import Footer from './components/helperComponents/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/homepage/Home';
import LoginAndRegister from './components/pages/loginAndRegisterPage/LoginAndRegister'
import AdminPage from "./components/pages/AdminPage";
import PetfriendProfile from "./components/pages/PetfriendProfile";
import PetOwnerProfile from "./components/pages/PetOwnerProfile";
import PetFriendFind from "./components/helperComponents/PetFriendFind";
import Form from "./Form";

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
                    <Route path='/PetFriendFind' element ={<PetFriendFind/>} />
                    <Route path='/Reserve' element = {<Form />}/>
                </Routes>
                <Footer/>
            </Router>
        </>

    );
}

export default App;