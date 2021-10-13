import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { auth } from "../../Firebase";
import { signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { alertLogout } from '../../Components';

 
export const Navbar = () => {

    const history = useHistory();

    const [user, setUser] = useState<any | null>("");

    useEffect(() =>{
        onAuthStateChanged(auth, user => {
            if(user) setUser(user);
            else setUser(null);
        })
    },[])

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">React-TypeScript</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            { user &&
                                <>  
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/home">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/services">Services</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/api">API</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/redux">Redux</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">About</Link>
                                    </li>
                                </>
                            }
                            { !user && 
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                            }
                        </ul>
                        { user && 
                            <form className="d-flex">
                                <h5 className="text-dark mt-2 mx-2">User : { user.email }</h5>
                                <button className="btn btn-dark" type="button" onClick={()=>{
                                    signOut(auth);
                                    history.push('/login');
                                    alertLogout();
                                }}>Log Out</button>
                            </form>
                        }
                    </div>
                </div>
            </nav>
        </>
    );
}
