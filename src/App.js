import React, { Component } from 'react';
import { View, TextInput, Dimensions, Text } from 'react-native';
import './App.css';
import { handlePaste } from './Util';
const { width, height } = Dimensions.get('window');
class App extends Component {
  componentDidMount() {
    document.getElementById('editableDiv').addEventListener('paste', e => {
      handlePaste(e);
    });
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
