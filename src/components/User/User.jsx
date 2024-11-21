import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ user }) => {

    const { id, name, username, email } = user;

    const stylecss = {
        border: '1px solid red',
        margin: '15px',
    }

    return (
        <div style={stylecss}>
            <p>{name}</p>
            <p>{username}</p>
            <p>{email}</p>
            <Link to={`/users/${id}`}>
                Show me Details
            </Link>
            <Link to={`/users/${id}`}>
                <button>Click Me</button>
            </Link>
        </div>
    );
};

export default User;