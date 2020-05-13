import React from 'react'
import './Header.css'

import {Menu, MenuItem, IconButton} from '@material-ui/core'
import {AccountCircle} from '@material-ui/icons'

function LoginMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <div>
            <IconButton className="button" id="login-button" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <AccountCircle fontSize="large"></AccountCircle>
            </IconButton>
            <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem >Log In</MenuItem>
            <MenuItem >Sign Up</MenuItem>
            </Menu>
        </div>
    )
}

export default LoginMenu;