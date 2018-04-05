import React, {Component, Fragment} from 'react';
/*import {View, textinput, Dimensions, Text} from 'react-native-web';*/
import './App.css';
import './index.css';

/*const {width, height} = Dimensions.get('window');*/

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
      <Fragment>
        <text>
          <h1 className="heading">UI To RGB</h1>
        </text>
        <h2>
          Enter a UI Color code to Convert it to RGBA or HEX(Coming Soon!)
        </h2>
        <form>
          <div id="editableDiv">
            <text>
              Red:
              <input placeholder="Red" type="number" required={true} />
            </text>
            <text>
              Green:
              <input placeholder="Green" type="number" required={true} />
            </text>
            <text>
              Blue:
              <input placeholder="Blue" type="number" required={true} />
            </text>
            <text>
              Alpha:
              <input
                placeholder="alpha"
                type="number"
                min="0"
                max="1"
                required={true}
              />
            </text>
          </div>
          <button class="submit" type="submit">
            Submit
          </button>
        </form>
        <div className="output">
          The Equivalent RGB Code is:
          <div className="color" />
        </div>
      </Fragment>
    );
  }
}

export default App;
