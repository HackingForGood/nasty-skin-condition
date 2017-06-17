import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'

export class Card extends Component {
  constructor() {
      super();
      this.state = {
          modalIsOpen: false
          };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    }

    openModal() {
      this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
      this.subtitle.style.color = '#f00';
    }

    closeModal() {
      this.setState({modalIsOpen: false});
    }

  render() {
    return(
        <div className="card">
          <h1 className="card__title">Medicine Name</h1>
          <p class="card__details">Quantity</p>
          <p class="card__details">Who</p>
          <button className="card__btn" onClick={this.openModal}>Fulfill</button>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Confirmation Modal">

          <h2 ref={subtitle => this.subtitle = subtitle}>Confirm?</h2>
          <button className="modal__btn modal__btn--close"onClick={this.closeModal}>No</button>
          <button className="modal__btn modal__btn--confirm">Yes</button>

        </Modal>
        </div>
      )
    }
}





const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
