
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';
import './Nav.css';

const Nav = () => {
    const { isLogged, logout } = useAuth();

    return (
        <div className="navbar">
            <div className="leftSide">
            <img src="logo.jpeg" alt="Logo" className="logo" />
                FPDD
            </div>
            <div className="rightSide">
                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact</Link>

                {isLogged ? (
                    <div className="nav-logout">
                        <button onClick={logout}>Logout</button>
                    </div>
                ) : (
                    <>
                        <div className="nav-login">
                            <Link to='/login'><button>Login</button></Link>
                        </div>
                        <div className="nav-register">
                            <Link to='/register'><button>Register</button></Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Nav;
