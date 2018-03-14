import React, { Component } from 'react';
import { View, TextInput, Dimensions, Text } from 'react-native';
import './App.css';
const { width, height } = Dimensions.get('window');
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
      <View
        style={{ width: width, height: height }}
        id="editableDiv"
        contenteditable="true"
      >
        <View style={{ flexDirection: 'row' }}>
          <Text>red</Text>
          <TextInput
            style={{ borderColor: '#ff0', borderWidth: 4, width: width / 2 }}
          />
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Text>blue</Text>
          <TextInput
            style={{ borderColor: '#ff0', borderWidth: 4, width: width / 2 }}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text>green</Text>
          <TextInput
            style={{ borderColor: '#ff0', borderWidth: 4, width: width / 2 }}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text>alpha</Text>
          <TextInput
            style={{ borderColor: '#ff0', borderWidth: 4, width: width / 2 }}
          />
        </View>
      </View>
    );
  }
}

export default App;
