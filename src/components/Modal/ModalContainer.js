import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import {MenuItem, Button} from '@material-ui/core'
import LoginModal from './LoginModal'
import SignModal from './SignModal'

import './Modal.css'
 
function ModalContainer (props) {
  const [open, setOpen] = React.useState(false)

  const onOpenModal = () => {
    setOpen(true)
  }
 
  const onCloseModal = () => {
    setOpen(false)
  }

  return (
    <div>
      {props.button === 'button' ? <Button onClick={onOpenModal} variant="contained" className="button">{props.label}</Button> : <MenuItem onClick={onOpenModal}>{props.label}</MenuItem>}
      <Modal open={open} onClose={onCloseModal} center>
        {props.type === "login" ? <LoginModal></LoginModal> : <SignModal></SignModal>}
      </Modal>
    </div>
  );
}


export default ModalContainer;