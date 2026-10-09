import { Link, NavLink } from 'react-router';
import { Routes, Route } from "react-router";
import Signup from "./Components/Pages/Signup/Signup";
import Login from "./Components/Pages/Login/Login";
import Homepage from "./Components/Pages/Homepage/Homepage";
import Memberships from './Components/Pages/Memberships/Memberships';
import Social from './Components/Pages/Social/Social';
import Dashboard from './Components/Pages/Dashboard/Dashboard';

export default function Pages() {

    return (
        <Routes>
            <Route index element={<Homepage />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="memberships" element={<Memberships />} />
            <Route path="social" element={<Social />} />
            <Route path="dashboard" element={<Dashboard />} />
        </Routes>
    )
}