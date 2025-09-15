import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../assets/img/logo-emmamesadas.ico';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="Logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/mesadas">Mesadas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/accesorios">Accesorios</Link>
                        </li>
                    </ul>
                    <Link to="/cart" className="d-flex">
                        <CartWidget />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;