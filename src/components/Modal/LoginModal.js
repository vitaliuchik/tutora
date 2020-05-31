import React from 'react'

import './Modal.css'


function LoginModal() {
    return (
        <div className="modal-container">
            <form action="" method="post">
                <label for="uname" className="label-input"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required />

                <label for="psw" className="label-input"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />

                <button type="submit">Log In</button>               
            </form> 
        </div>
    )
}


export default LoginModal