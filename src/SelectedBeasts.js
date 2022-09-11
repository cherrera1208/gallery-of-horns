import React from 'react';
import Modal from 'react-bootstrap/Modal'
import './Beasts.css';
class SelectedBeasts extends React.Component {

  render() {
    return (
      <Modal className="beastsModal"
        show={this.props.showModal} onHide={this.props.handleHideModal}>
        <Modal.Header className='close' closeButton>
          <Modal.Body className="beastsBody">
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
