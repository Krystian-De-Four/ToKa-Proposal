import { Link, NavLink } from 'react-router';
import { Routes, Route } from "react-router";
import Signup from "./Components/Pages/Signup/Signup";
import Login from "./Components/Pages/Login/Login";
import Homepage from "./Components/Pages/Homepage/Homepage";

export default function Pages() {

    return (
        <Routes>
            <Route index element={<Homepage />} />
            <Route path="signup" element={<Signup />} />
        </Routes>
    )
}