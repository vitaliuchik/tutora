import React from 'react'
import './Header.css'

import {Menu, IconButton} from '@material-ui/core'
import {AccountCircle} from '@material-ui/icons'
import ModalContainer from '../Modal/ModalContainer'

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
            <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose} onClick={handleClose}>
            <ModalContainer label="Log In" type="login"></ModalContainer>
            <ModalContainer label="Sign Up" type="signup"></ModalContainer>
            
            </Menu>
        </div>
    )
}

export default LoginMenu;