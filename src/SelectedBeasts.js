import React from 'react';
import Modal from 'react-bootstrap/Modal'
import './Beasts.css';
class SelectedBeasts extends React.Component {

  render() {
    return (
      <Modal className="beasts"
        show={this.props.showModal} onHide={this.props.handleHideModal}>
        <Modal.Header closeButton>
          <Modal.Body>
            {this.props.beast.title}
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
