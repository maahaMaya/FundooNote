import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../Pages/DashBord/Dashboard';
import ForgotPassword from '../Pages/ForgotPassword/ForgotPassword';
import RegisterNewUser from '../Pages/RegisterNewUser/Register';
import ResetPassword from '../Pages/ResetPassword/ResetPassword';
import UserSignIn from '../Pages/SignIn/SignIn';

function Routing() {
    return (
        <>
        <Router>
            <Routes>
                <Route path='/' element ={<UserSignIn/>} />
                <Route path='/newUser'  element ={<RegisterNewUser/>} />
                <Route path='/dashboard' element ={<Dashboard/>} />
                <Route path='/resetPassword' element={<ResetPassword/>} />
                <Route path='/forgotPassword' element={<ForgotPassword/>} />
            </Routes>
        </Router>
        </>
    )
}
export default Routing