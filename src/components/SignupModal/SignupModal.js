import React, { Component } from 'react'
import Modal from 'react-modal'

export default class Signup extends Component {
  closeModal = () => {
    this.setState({ isOpen: false })
  }

  render() {
    return (
      <Modal
        isOpen={this.props.modalState}
        contentLabel='Modal'
      >
        <button onClick={this.props.closeModal}>close</button>
      </Modal>
    )
  }
}
