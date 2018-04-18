import React, {Component} from 'react';
import './style.css';

export default class Header extends Component {
  render() {
    return (
      <div id="header">
        <h1>UI To RGBA</h1>
        <h2>Enter a UI Color code to Convert it to RGBA</h2>
      </div>
    );
  }
}
