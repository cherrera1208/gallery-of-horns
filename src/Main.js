import React from 'react';
import Beast from './Beasts.js';

class Main extends React.Component {
  render() {
    // console.log(this.props.handleClick);
    let beastsArr = this.props.data.map((beastCall, idx) => {
      return <Beast
        img={beastCall.image_url}
        title={beastCall.title}
        description={beastCall.description}
        alt={beastCall.keyword}
        key={idx}
        handleHearts={this.props.handleHearts}
        handleClick={this.props.handleClick}
      />
    });
    return (
      <main>
        {beastsArr}
      </main >
    );
  };
}
export default Main;
