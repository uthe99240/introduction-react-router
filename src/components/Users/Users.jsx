import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';

const Users = () => {
    const users = useLoaderData();
    console.log(users);
    
    return (
        <div>
            <h1>This is Users {users.length}</h1>
            {
                users.map(user =>  <User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Users;