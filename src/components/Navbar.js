import React from 'react';
import Flags from 'country-flag-icons/react/3x2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Boot</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <div className="d-flex justify-content-center">
                            {/* <button className="btn btn-outline-success me-2" type="submit">Search</button> */}
                            <ul className="navbar-nav me-2  mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">Swap</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pools</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Governance</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">More</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <div className="d-flex justify-content-center">

                            <ul className="navbar-nav me-2  mb-2 mr-5 mb-lg-0">
                                
                                <li className="nav-item dropdown">
                                    <div style={{marginRight: 70}}>

                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <Flags.US size={5} title="" style={{ fontSize: 60, }} icon={faSun} className=""/> Eng
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a className="dropdown-item" href="#"><Flags.US size={2} title="" style={{ fontSize: 30, }} icon={faSun} className=""/></a></li>
                                    </ul>
                                    </div>
                                </li>
                            </ul>
                            <div className="mr-5"></div>
                            
                                <button className="btn btn-outline-default me-2"><FontAwesomeIcon style={{ fontSize: 30, marginLeft: 10, marginRight: 10 }} icon={faSun} /></button>
                            
                            <div className="ml-5"></div>
                            <button className="btn btn-outline-success me-2" style={{ borderRadius: "20px" }} type="submit">Connect Wallet</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
