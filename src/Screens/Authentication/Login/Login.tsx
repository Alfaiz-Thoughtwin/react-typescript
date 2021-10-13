import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {auth} from '../../../Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useHistory } from 'react-router-dom';
import { Navbar } from '../../../Components';
import {alertSuccessLogin,alertErrorLogin} from '../../../Components';

export const Login = () => {

    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            history.push("/");
            alertSuccessLogin(`User : ${result.user.email}`);
        } catch (error:any) {
            alertErrorLogin(`${error.message}`);
        }
    };
    
    return (
        <>
            <Navbar />
            <div className="container my-4">
                <div className="text-center">
                    <p className="text-muted my-4">Didn't have an account? <Link to="/signup">Sign Up</Link></p>
                    <h1>Login Page</h1>
                </div>
                <div className="row my-4">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                    <form className="form form-control p-4" onSubmit={(e)=>handleSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" autoComplete="off" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" id="password" name="password" />
                        </div>
                        <button type="submit" className="btn btn-dark">Log In</button>
                    </form>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </>
    );
}
