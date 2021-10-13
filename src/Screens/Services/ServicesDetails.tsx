import React from 'react';
import { useParams } from "react-router-dom";
import { Navbar } from '../../Components';

export const ServicesDetails = () => {

    const params:any = useParams();

    return (
        <>
            <Navbar />
            <div className="container text-center my-4">
                <h1>ServicesDetails Page</h1>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h3 className="text-muted">Service ID : { params.serviceId }</h3>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </>
    );
}
