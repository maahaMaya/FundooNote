import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserSignIn from '../Pages/SignIn/SignIn';

function Routing() {
    return (
        <>
        <Router>
            <Routes>
                <Route path='/' element ={<UserSignIn/>} />
            </Routes>
        </Router>
        </>
    )
}
export default Routing