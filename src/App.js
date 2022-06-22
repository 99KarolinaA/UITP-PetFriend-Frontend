import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import LoginAndRegister from './components/pages/LoginAndRegister'
import AdminPage from "./pages/AdminPage";

function App() {
    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path="/Sign" element={<LoginAndRegister/>}/>
                    <Route path="/Admin" element={<AdminPage/>}/>
                </Routes>
                <Footer/>
            </Router>
        </>

    );
}

export default App;