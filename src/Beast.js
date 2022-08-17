import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Beast.css';

class Beast extends React.Component {
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

  render() {
    return (
      <div className='beasts'>
        <Card onClick={this.handleLikes}>
          <h2>{this.props.title}</h2>
          <p>❤️ {this.state.likes}</p>
          <img
            src={this.props.img}
            alt={this.props.keyword}
            title={this.props.title}
          />
          <p>{this.props.description}</p>
        </Card>
      </div>
    )
  };
}

export default Beast;
