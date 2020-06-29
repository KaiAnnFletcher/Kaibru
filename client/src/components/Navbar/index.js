import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
            KAIBRU    
            </Link>

            <div>
                <ul className="nav navbar-nav navbar-center">   
                    <li className="nav-item1">
                        <Link
                            to="/about"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/about"
                                ? "nav-link active"
                                :"nav-link"
                            }
                            >
                            About Us   
                        </Link>  
                    </li>

                    <li className="nav-item2">
                        <Link
                        to = "/mission"
                        className={
                            window.location.pathname === "/" || window.location.pathname === "/mission"
                                ? "nav-link active"
                                :"nav-link"
                        }
                        >
                        Mission Statement
                        </Link>
                    </li>

                 <li className="nav-item3">
                        <Link
                        to ="/login"
                        className={
                            window.location.pathname === "/" || window.location.pathname === "/login"
                                ? "nav-link active"
                                :"nav-link"
                        }
                        >
                        Login
                        </Link>
                 </li>

                 <li className="nav-item4">
                        <Link
                        to ="/logout"
                        className={
                            window.location.pathname === "/" || window.location.pathname === "/logout"
                                ? "nav-link active"
                                :"nav-link"
                        }
                        >
                        Logout
                        </Link>
                 </li>

                 <li className="nav-item5">
                        <Link
                        to ="/signup"
                        className={
                            window.location.pathname === "/" || window.location.pathname === "/signup"
                            ? "nav-link active"
                            :"nav-link" 
                        }
                        >
                            Signup
                        </Link>
                  </li>

                  <li className="nav-item6">
                        <Link
                        to ="/browse"
                        className={
                            window.location.pathname === "/" || window.location.pathname === "/browse"
                            ? "nav-link active"
                            :"nav-link" 
                        }
                        >
                        Start Browsing!
                        </Link>
                  </li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;