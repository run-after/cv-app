import './styles/App.css';
import React from 'react';
import General from './components/General';
import Practical from './components/Practical';
import Education from './components/Education';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      general: {
        name: 'John Doe',
        email: 'example@example.com',
        phone: '555-555-5555',
      }
    };
  };
  /* General section */
  setGeneralState = (e) => {
    e.preventDefault()
    this.setState({
      general: {
        name: e.target[0].value,
        email: e.target[1].value,
        phone: e.target[2].value
    }})
    // Hide General Modal
    document.getElementsByClassName('general-modal')[0].style = 'display: none';
  }

  showGeneralModal = () => {
    // Show General Modal
    document.getElementsByClassName('general-modal')[0].style = 'display: grid';
  }

  /* Practical section */
  
  

  render() {
    return (
      <div className="container">
        <General general={this.state.general} showGeneralModal={this.showGeneralModal} setGeneralState={this.setGeneralState} />
        <Practical />
        <Education />
      </div>
      
    );
  };
};

export default App;