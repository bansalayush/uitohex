import React, {Component, Fragment} from 'react';
import Header from './Components/Header';
import Form from './Components/Form/';
import Footer from './Components/Footer';
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
