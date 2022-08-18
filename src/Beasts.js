import React from 'react';
import Card from 'react-bootstrap/Card';
import './Beasts.css';

class Beasts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      likes: 0,
    }
  }

  handleLikes = () => {
    this.setState({
      likes: this.state.likes + 1,
    })
  }

  handleClick = () => {
    // console.log(this.props.handleClick);
    this.props.handleClick(this.props);
  }

  render() {
    return (
      <div className='beasts'>
        <Card onClick={() => {
          this.handleLikes();
          this.handleClick();
          this.props.handleHearts();
        }}>
          <h2>{this.props.title}</h2>
          <p>👍 {this.state.likes}</p>
          <img
            src={this.props.img}
            alt={this.props.keyword}
            title={this.props.title}
          />
          <p>{this.props.description}</p>
        </Card>
      </div >
    )
  };
}

export default Beasts;
