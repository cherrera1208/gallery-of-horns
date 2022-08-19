import React from 'react';
import Header from './Header.js';
import Main from './Main';
import Footer from './Footer.js';
import HornForm from './HornForm.js';
import SelectedBeasts from './SelectedBeasts';
import './App.css';
import data from './data.json';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBeasts: {},
      hearts: '',
      showModal: false,
      filteredData: data,
    };
  }

  handleHearts = () => {
    this.setState({
      hearts: this.state.hearts + '💕',
    });
  };

  handleClick = (beast) => {
    this.setState({
      selectedBeasts: beast,
      showModal: true
    });
  };

  handleHideModal = () => {
    this.setState({
      showModal: false
    });
  };

  handleSubmit = (selected) => {
    console.log(data);
    if (selected === '1') {
      let newArr = data.filter((beast) => beast.horns === 1);
      this.setState({
        filteredData: newArr,
      });
    } else if (selected === '2') {
      let newArr = data.filter((beast) => beast.horns === 2);
      this.setState({
        filteredData: newArr,
      });
    } else if (selected === '3') {
      let newArr = data.filter((beast) => beast.horns === 3);
      this.setState({
        filteredData: newArr,
      });
    } else {
      this.setState({
        filteredData: data,
      });
    };

    this.setState({
      selected,
    });
  };

  render() {
    return (
      <>
        <Header hearts={this.state.hearts} />
        <HornForm
          data={data}
          handleSubmit={this.handleSubmit}
        />
        <Main
          handleHearts={this.handleHearts}
          data={this.state.filteredData}
          handleClick={this.handleClick}
        />
        <SelectedBeasts
          beast={this.state.selectedBeasts}
          showModal={this.state.showModal}
          handleHideModal={this.handleHideModal}
        />
        <Footer />
      </>
    )
  };
}

export default App;
