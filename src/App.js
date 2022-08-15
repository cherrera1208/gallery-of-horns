import React from 'react';
import Header from './Header.js';
import Main from './Main';
import Footer from './Footer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
        {/* <header>header</header> */}
        {/* <main>main</main> */}
        {/* <footer>foot</footer> */}
      </>
    )
  }
}

export default App;
