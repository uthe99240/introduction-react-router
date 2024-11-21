import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const userDetails = useLoaderData();
    console.log(userDetails);
    
    return (
        <div>
            <p>{userDetails.name}</p>
            <p>{userDetails.address.geo.lat}</p>
            <p>{userDetails.phone}</p>
            <p>{userDetails.website}</p>
        </div>
    );
};

export default UserDetails;