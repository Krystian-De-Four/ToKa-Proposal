import { Routes, Route } from "react-router";
import Signup from "./Components/Pages/Signup/Signup";
import Login from "./Components/Pages/Login/Login";
import Homepage from "./Components/Pages/Homepage/Homepage";
import Memberships from './Components/Pages/Memberships/Memberships';
import Social from './Components/Pages/Social/Social';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import Freeresources from './Components/Pages/Freeresources/Freeresources';
import Accountmanagement from './Components/Pages/Accountmanagement/Accountmanagement';
import Articles from './Components/Pages/Articles/Articles';
import Faq from './Components/Pages/Faq/Faq';
import Contentplus from "./Components/Pages/Contentplus/Contentplus";
import Contentextra from "./Components/Pages/Contentextra/Contentextra";
import TierControl from "./Components/tiercontrol/tiercontrol";

export default function Pages() {
    return (
        <Routes>
            <Route index element={<Homepage />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="memberships" element={<Memberships />} />
            <Route path="social" element={<Social />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="faq" element={<Faq />} />
            <Route path="articles" element={<Articles />} />
            <Route path="freeResources" element={<Freeresources />} />
            <Route path="accountmanagement" element={<TierControl requires="free"><Accountmanagement /></TierControl>} />
            <Route path="manageAccount" element={<TierControl requires="free"><Accountmanagement /></TierControl>} />
            <Route path="contentplus" element={<TierControl requires="plus"><Contentplus /></TierControl>} />
            <Route path="tier1" element={<TierControl requires="plus"><Contentplus /></TierControl>} />
            <Route path="contentextra" element={<TierControl requires="extra"><Contentextra /></TierControl>} />
        </Routes>
    )
}