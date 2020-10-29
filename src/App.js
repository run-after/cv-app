import './App.css';
import React from 'react';
import General from './components/General';
import Practical from './components/Practical';
import Education from './components/Education';

class App extends React.Component {
  constructor() {
    super()
    this.state = { }
  }
  render() {
    return (
      <div className="container">
        <div className="general">
          <General />
        </div>
        <div className="practical">
          <Practical />
        </div>
        <div className="education">
          <Education />
        </div>
      </div>
      
    );
  };
};

export default App;
