import React from 'react';
import './css/Login.css';
import loginUrl from './js/spotify.js';

function Login() {
    return (
        <div className="login">
            <img alt="" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" />

            <a href={loginUrl}>Login with spotify</a>
        </div>
    )
}

export default Login

