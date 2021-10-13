import React from 'react';
import './Services.css';
import { Link } from 'react-router-dom';
import { Navbar } from '../../Components';


export const Services = () => {
    return (
        <>
            <Navbar />
            <div className="container text-center my-4">
                <h1>Services Page</h1>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <ul className="list-group">
                            <li className="list-group-item"><Link to="/services/web-development">Web Development</Link></li>
                            <li className="list-group-item"><Link to="/services/mobile-development">Mobile Development</Link></li>
                            <li className="list-group-item"><Link to="/services/desktop-development">Desktop Development</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </>
    );
}
