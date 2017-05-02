import React from 'react'
import Modal from 'react-modal'

export const Signup = (props) => {
  return (
    <Modal isOpen={props.modalState} contentLabel='Modal'>
      <button onClick={props.closeModal}>close</button>
      <h1 className='feature'>THIS FEATURE IS NOT YET IMPLEMENTED</h1>
    </Modal>
  )
}

export default Signup
