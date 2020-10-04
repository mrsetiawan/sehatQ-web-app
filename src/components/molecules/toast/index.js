import { React, Toast } from '../../../libraries'

const ToastAlert = ({ onClose, show, title }) => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center fixed-top h-10'>
      <Toast onClose={onClose} show={show} delay={2000} autohide>
        <Toast.Body className='bg-success text-light rounded'>{title}</Toast.Body>
      </Toast>
    </div>
  )
}

export default ToastAlert
