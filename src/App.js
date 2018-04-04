import React, {Component} from 'react';
import {View, TextInput, Dimensions, Text} from 'react-native';
import './App.css';
const {width, height} = Dimensions.get('window');
class App extends Component {
  handlePaste(e) {
    var clipboardData, pastedData;

    // Stop data actually being pasted into div
    e.stopPropagation();
    e.preventDefault();

    // Get pasted data via clipboard API
    clipboardData = e.clipboardData || window.clipboardData;
    pastedData = clipboardData.getData('Text');

    // Do whatever with pasteddata
    alert(pastedData);
  }

  componentDidMount() {
    document
      .getElementById('editableDiv')
      .addEventListener('paste', this.handlePaste);
  }

  render() {
    return (
      <div className="App">
        <View style={{width: 20, height: 50, backgroundColor: '#f00'}} />
        <header className="App-header">
          <h1 className="App-title text-red-light">UI To Hex</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
