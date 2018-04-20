import React, { Component, Fragment } from 'react';
import Header from '../Header';
import Form from '../Form';
import Footer from '../Footer';
import './App.css';

/*const {width, height} = Dimensions.get('window');*/

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Form />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
