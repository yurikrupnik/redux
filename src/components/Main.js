require('normalize.css');
require('styles/App.css');
import Button from './ButtonComponent';

import React, {Component} from 'react';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends Component {
  //constructor(props) {
  //  super(props);
  //}
  //static defaultProps = {
  //  action: PropTypes.function
  //};

  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
        <Button action="curentrly a string"/>
      </div>
    );
  }
}

export default AppComponent;
