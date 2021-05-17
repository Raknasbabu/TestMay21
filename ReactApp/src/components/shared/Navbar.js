import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">

                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/add" className="nav-link">Add & view Employee</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/edit" className="nav-link">Edit & Delete Employee</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header