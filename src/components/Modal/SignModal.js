import React from 'react'

import './Modal.css'


function SignModal() {
    return (
        <div className="modal-container">
            <form action="" method="post">
                <label for="uname" className="label-input"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required />

                <label for="uname" className="label-input"><b>Email</b></label>
                <input type="email" placeholder="Enter Username" name="uname" required />

                <label for="psw" className="label-input"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />

                <button type="submit">Login</button>
                <label className="label-submit">
                    <input type="checkbox" checked="checked" name="remember" /> Remember me
                </label>
            </form> 
        </div>
    )
}


export default SignModal