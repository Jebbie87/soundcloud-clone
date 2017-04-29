import React, { Component } from 'react'
import Modal from 'react-modal'

export default class Signup extends Component {
  render() {
    return (
      <Modal
        isOpen={this.props.modalState}
        contentLabel='Modal'
      >
        <button onClick={this.props.closeModal}>close</button>
        <h1 className='feature'>THIS FEATURE IS NOT YET IMPLEMENTED</h1>
      </Modal>
    )
  }
}
