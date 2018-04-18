import React, {Component, Fragment} from 'react';
import './style.css';
import {handlePaste} from '../Util';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uired: undefined,
      uigreen: undefined,
      uiblue: undefined,
      uialpha: undefined,
      rgbaColor: `rgba(255,255,255)`,
    };
    this.getUIValues = this.getUIValues.bind(this);
    this.getRGBAValues = this.getRGBAValues.bind(this);
  }
  getUIValues(uicolorValues) {
    console.log('UIColorValues => ', uicolorValues);
    if (uicolorValues.length === 4) {
      this.setState({
        uired: uicolorValues[0],
        uigreen: uicolorValues[1],
        uiblue: uicolorValues[2],
        uialpha: uicolorValues[3],
      });
    } else {
      //TODO: wrong input
      alert('You entered an invalid string');
    }
  }
  getRGBAValues(rgbaColorValues) {
    console.log(rgbaColorValues);
    if (rgbaColorValues.length === 0) {
      //TODO: enterd an invalid string
    } else {
      this.setState(
        {
          rgbaColor: `rgba\(${rgbaColorValues[0]},${rgbaColorValues[1]},${
            rgbaColorValues[2]
          },${rgbaColorValues[3]})`,
        },
        () => {
          console.log(this.state.rgbaColor);
        }
      );
    }
  }
  componentDidMount() {
    document.addEventListener('paste', e => {
      handlePaste(e, this.getUIValues, this.getRGBAValues);
    });
  }
  render() {
    return (
      <Fragment>
        <form>
          <div id="editableDiv">
            <text>
              Red:
              <input
                value={this.state.uired}
                min={0}
                max={1}
                step={0.01}
                placeholder="Red"
                type="number"
                required={true}
              />
            </text>
            <text>
              Green:
              <input
                value={this.state.uigreen}
                min={0}
                max={1}
                step={0.01}
                placeholder="Green"
                type="number"
                required={true}
              />
            </text>
            <text>
              Blue:
              <input
                value={this.state.uiblue}
                min={0}
                max={1}
                step={0.01}
                placeholder="Blue"
                type="number"
                required={true}
              />
            </text>
            <text>
              Alpha:
              <input
                value={this.state.uialpha}
                min={0}
                max={1}
                step={0.01}
                placeholder="alpha"
                type="number"
                required={true}
              />
            </text>
          </div>
          <button className="submit" type="submit">
            Submit
          </button>
        </form>
        <div className="output">
          The Equivalent RGBA Code is: {this.state.rgbaColor}
          <div
            style={{backgroundColor: this.state.rgbaColor}}
            className="color"
          />
        </div>
      </Fragment>
    );
  }
}
