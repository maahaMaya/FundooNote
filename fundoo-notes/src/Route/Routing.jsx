import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../Pages/DashBord/Dashboard';
import RegisterNewUser from '../Pages/RegisterNewUser/Register';
import UserSignIn from '../Pages/SignIn/SignIn';

function Routing() {
    return (
        <>
        <Router>
            <Routes>
                <Route path='/' element ={<UserSignIn/>} />
                <Route path='/newUser' element ={<RegisterNewUser/>} />
                <Route path='/dashboard' element ={<Dashboard/>} />
            </Routes>
        </Router>
        </>
    )
}
export default Routing