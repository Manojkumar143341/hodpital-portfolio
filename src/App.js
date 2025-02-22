import React from 'react';
import {
    Routes, Route,
    Link, useLocation
} from 'react-router-dom';
import Appointments from './components/Appointments';
import Doctors from './components/Doctors';
import Patients from './components/Patients';
import './App.css';

const App = () => {
    return (
        <div className="container">
            <Nav />
            <Routes>
                <Route path="/appointments" element={<Appointments />} />
                <Route path="/" element={<Appointments />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/patients" element={<Patients />} />
            </Routes>
        </div>
    );
}

const Nav = () => {
    const location = useLocation(); // Use location inside the Nav component

    const isLinkActive = (path) => location.pathname === path;

    return (
        <div className="container">
            <h1 style={{ color: "green" }}>
                GFG - Hospital Management App
            </h1>
            <nav>
                <ul>
                    <li className={isLinkActive('/appointments') ? 'active' : ''}>
                        <Link to="/appointments">Appointments</Link>
                    </li>
                    <li className={isLinkActive('/doctors') ? 'active' : ''}>
                        <Link to="/doctors">Doctors</Link>
                    </li>
                    <li className={isLinkActive('/patients') ? 'active' : ''}>
                        <Link to="/patients">Patients</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default App;
