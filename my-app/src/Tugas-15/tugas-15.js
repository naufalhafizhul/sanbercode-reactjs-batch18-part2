import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './../App.css';
import Routes from './tugas15-routes';
import Nav from './tugas15-nav';

export default Router = () => {
    return(
        <>
        <Router>
            <Nav></Nav>
            <br/>
            <Routes></Routes>
        </Router>
        </>
    )
}

