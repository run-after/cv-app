import './styles/App.css';
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
        <General />
        <Practical />
        <Education />
      </div>
      
    );
  };
};

export default App;
