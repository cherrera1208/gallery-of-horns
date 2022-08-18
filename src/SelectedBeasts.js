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
    return (
      <Modal className="beasts"
        show={this.props.showModal} onHide={this.props.handleHideModal}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.beast.title}</Modal.Title>
          <Modal.Body>
            < img
              src={this.props.beast.img}
              alt={this.props.keyword}
              title={this.props.title}
            />
            {this.props.beast.description}
          </Modal.Body>
        </Modal.Header>
      </Modal>
    )
  }
}

export default SelectedBeasts; 
