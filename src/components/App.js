import React, { Component } from "react";
import '../styles/App.scss';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import { Second } from './Second';

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/second">Second</Link>
        </nav>
        <div>
          <Second />
        </div>
      </div>
    );
  }
}

export default App;