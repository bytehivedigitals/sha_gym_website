import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="nav-container h-1/5">
            <div className="nav-logo">
                <img src={""} alt="Logo" />
            </div>
            <div className="nav-content">
                <ul className="nav-links">
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Features</a>
                    </li>
                    <li>
                        <a href="">Services</a>
                    </li>
                </ul>
            </div>
            <div className="nav-end">
                <button>Contact Us</button>
            </div>
        </div>
    );
};

export default Navbar;