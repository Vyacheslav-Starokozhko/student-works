import React from 'react';
import {Link} from "react-router-dom";
import logo from "../../assets/img/logo.svg"
import {useSelector} from "react-redux";

const Navbar = () => {
    const isAuth = useSelector(state => state.user.isAuth)

    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="site-logo"/>
            </div>
            <nav className="header__menu header-menu">
                <ul className="header-menu__list">
                    <li className="menu-item"><Link to="/about">About us</Link></li>
                    <li className="menu-item"><Link to="/pricing">Pricing</Link></li>
                    <li className="menu-item"><Link to="/orders">Orders</Link></li>
                </ul>
            </nav>
            <div className="header__authorization authorization-block">
                <ul className="authorization-block__list">
                    {!isAuth && <li className="menu-item"><Link to="/login">Sign in</Link></li>}
                    {!isAuth && <li className="menu-item"><Link to="/registration">Registration</Link></li>}
                    {isAuth && <li className="menu-item">Log Out</li>}
                    <li className="menu-item order-link">Create Order</li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;