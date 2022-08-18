import React from 'react';
// import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal'

//create modal
class SelectedBeasts extends React.Component {
  handleShowModal = (title, img, description) => {
    this.setState({
      showModal: true,
      title: title,
      img: img,
      description: description
    })
  };

  render() {
    console.log(this.props.beast)
    return (
      <Modal show={this.props.showModal} onHide={this.props.handleHideModal}>
        <Modal.Header closeButton>
          <Modal.Title>test</Modal.Title>
        </Modal.Header>
      </Modal>
    )
  }
}

export default SelectedBeasts; 
