import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../Pages/Home';
import Footer from '../Pages/Footer';
import NavBar from '../NavBar/NavBar';

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>

            <Footer></Footer>
        </div>
    );
};

export default Root;