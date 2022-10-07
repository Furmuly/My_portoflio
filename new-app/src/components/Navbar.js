import { Reorder } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
//using the uselocation to show pages list in the burger menu when we click on it 
import { useLocation } from 'react-router-dom';
import "../styles/Navbar.css";
import { ReactComponent as Mylogo } from "../photos/mylogo.svg";
import { Link } from "react-router-dom";


function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
    //sethig the navbar expend to false so when we click on one of the pages it closes the burger menu and show us the page 
    //uselocation helps to  know where in the application we are
    const location = useLocation();
    //using the useEffect to set the expandNavbar to false when the page changes 
    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);

    return (
        //using id to open and close the expend the navbar 
        //SetExpand Navbar prev bring as to the new chosen page and closes the burger menu 
        <div className='nav-container bd-grid' id={expandNavbar ? "open" : "close"}>
            <div className='toggleButton'>
                <button onClick={() => { setExpandNavbar((prev) => !prev); }} >
                    <Reorder />
                </button>
            </div>
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 ">
                <a href="/">
                    <Mylogo className="rounded-circle" />
                </a>
                <div className='nav-links'>
                    <Link to={"/"}> Home </Link>
                    <Link to={"/About"}> About </Link>
                    <Link to={"/Skills"}> Skills </Link>
                    <Link to={"/Contact"}> Contact </Link>

                </div>
            </header>
        </div >
    );
}

export default Navbar;