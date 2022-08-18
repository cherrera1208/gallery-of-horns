import React from 'react';
import Beast from './Beast.js';
import data from './data.json';
class Main extends React.Component {
  render() {
    let beastsArr = [];
    data.forEach((beastCall, idx) => {
      beastsArr.push(
        <Beast
          img={beastCall.image_url}
          title={beastCall.title}
          description={beastCall.description}
          alt={beastCall.keyword}
          key={idx}
        />
      )
    });
    return (
      <main>
        {beastsArr}
      </main>
    );
  };
}
export default Main;
