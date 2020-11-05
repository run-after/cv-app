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
      },
      practical: {
        'job1': {
          title: 'Job 1',
          location: 'Location 1',
          dates: '1/19 - Current',
          description: 'Job 1 description'
        },
        'job2': {
          title: 'Job 2',
          location: 'Location 2',
          dates: '1/18 - 1/19',
          description: 'Job 2 description'
        },
        'job3': {
          title: 'Job 3',
          location: 'Location 3',
          dates: '1/17 - 1/18',
          description: 'Job 3 description'
        }
      }
    };
  };
  /* General section */
  setGeneralState = (e) => {
    e.preventDefault();
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
  
  setPracticalState = (e) => {
    const parentID = e.target.parentNode.parentNode.id;
    e.preventDefault();
    this.setState(prevState => ({
      practical: {
        ...prevState.practical,
        [parentID]: {
          title: e.target[0].value,
          location: e.target[1].value,
          dates: e.target[2].value,
          description: e.target[3].value
        }
        
      }
    }))
    e.target.parentNode.style = 'display: none';
  }
  
  showPracticalModal = (e) => {
    e.target.parentNode.children[0].style = 'display: grid';
  }

  removeJob = (e) => {
    
    const remainingJobs = Object.keys(this.state.practical).map((key) => {
      if (e.target.parentNode.id !== key) {
        return this.state.practical[key];
      }
    }).filter(a => a !== undefined);
    
    this.setState({
      practical: remainingJobs
    });
    // working but UGLY
  };

  render() {
    return (
      <div className="container">
        <General general={this.state.general} showGeneralModal={this.showGeneralModal} setGeneralState={this.setGeneralState} />
        <Practical practical={this.state.practical} showPracticalModal={this.showPracticalModal} setPracticalState={this.setPracticalState} removeJob={this.removeJob} />
        <Education />
      </div>
      
    );
  };
};

export default App;