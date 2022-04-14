import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            {/* <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link> */}

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        
                        className="nav-item nav-link" 
                        to="/ejercicio1"
                    >
                        Bote de Pintura
                    </NavLink>

                    {/* <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink> */}
                </div>
            </div>
        </nav>
    )
}