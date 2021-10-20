import React, { useState } from 'react';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { Navbar } from '../../Components';

export const About = () => {

    const [country, setCountry] = useState<any | null>("");
    const [region, setRegion] = useState<any | null>("");

    const selectCountry = (val:any) => {
        setCountry(val);
    }
    
    const selectRegion = (val:any) => {
        setRegion(val);
    }

    return (
        <>
            <Navbar />
            <div className="container text-center my-4">
                <h1>About Page</h1>
            </div>

            <div className="container text-center my-4">
                <CountryDropdown
                    defaultOptionLabel="Select a country"
                    value={country}
                    onChange={(val:any) => selectCountry(val)} />

                <RegionDropdown
                    blankOptionLabel="No country selected"
                    defaultOptionLabel="Now select a region"
                    country={country}
                    value={region}
                    onChange={(val:any) => selectRegion(val)} />
            </div>
        </>
    );
}
