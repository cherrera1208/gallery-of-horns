import React from 'react';
import Header from './Header.js';
import Main from './Main';
// import Footer from './Footer.js';
import SelectedBeasts from './SelectedBeasts';
// import Modal from 'react-bootstrap/Modal'
import './App.css';
import data from './data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBeasts: {},
      hearts: '',
      showModal: false,
    };
  }

  handleHearts = () => {
    this.setState({
      hearts: this.state.hearts + '💕',
    });
  };

  handleClick = (beast) => {
    // console.log(beast)
    this.setState({
      selectedBeast: beast,
      showModal: true
    });
  };

  // handleShowModal = (title, img, description) => {
  //   this.setState({
  //     showModal: true,
  //     title: title,
  //     img: img,
  //     description: description
  //   })
  // }

  handleHideModal = () => {
    this.setState({
      showModal: false
    });
  };

  render() {
    return (
      <>
        <Header hearts={this.state.hearts} />
        <Main
          handleHearts={this.handleHearts}
          data={data}
          handleClick={this.handleClick}
        // handleShowModal={this.handleShowModal}
        />
        <SelectedBeasts
          beast={this.state.selectedBeast}
          showModal={this.state.showModal}
          handleHideModal={this.handleHideModal}
        />
        <footer onClick={this.handleShowModal}>
          &copy;
        </footer>
        {/* <Modal
          show={this.state.showModal}
          onHide={this.handleHideModal}
        >
          {this.state.title}
          {this.state.img}
          {this.state.description}
        </Modal> */}
      </>
    )
  }
}

export default App;
