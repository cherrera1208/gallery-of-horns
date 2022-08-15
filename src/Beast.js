import React from 'react';

class Beast extends React.Component {
  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <img src={this.props.img} alt={this.props.alt} title={this.props.title} />
        <p>{this.props.description}</p>
      </>
    )
  }
}

export default Beast;
