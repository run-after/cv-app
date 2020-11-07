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
        }
      },
      education: {
        'school1': {
          name: 'School 1',
          location: 'Location 1',
          dates: '1/19 - Current',
          summary: 'School 1 summary'
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
  };

  addJob = (e) => {
    let newJobNum = Object.keys(this.state.practical).length +1;
    this.setState(prevState => ({
      practical: {
        ...prevState.practical,
        ['job' + newJobNum]: {
          title: '',
          location: '',
          dates: '',
          description: ''
        }
      }
    }))
    //Need timeout to allow to render before can fake the click
    setTimeout(() => {
      document.getElementById('job' + newJobNum).childNodes[1].click()
    }, 1);
  }

  /* Education Section */
  
  setEducationState = (e) => {
    
    const parentID = e.target.parentNode.parentNode.id;
    e.preventDefault();
    this.setState(prevState => ({
      education: {
        ...prevState.education,
        [parentID]: {
          name: e.target[0].value,
          location: e.target[1].value,
          dates: e.target[2].value,
          summary: e.target[3].value
        }
        
      }
    }))
    e.target.parentNode.style = 'display: none';
  }
  
  showEducationModal = (e) => {
    e.target.parentNode.children[0].style = 'display: grid';
  }

  removeSchool = (e) => {
    const remainingSchools = Object.keys(this.state.education).map((key) => { 
      if (e.target.parentNode.id !== key) {
        return this.state.education[key];
      }
    }).filter(a => a !== undefined);
    
    this.setState({
      education: remainingSchools
    });
  };

  addSchool = (e) => {
    let newSchoolNum = Object.keys(this.state.education).length +1;
    this.setState(prevState => ({
      education: {
        ...prevState.education,
        ['school' + newSchoolNum]: {
          name: '',
          location: '',
          dates: '',
          summary: ''
        }
      }
    }))
    //Need timeout to allow to render before can fake the click
    setTimeout(() => {
      document.getElementById('school' + newSchoolNum).childNodes[1].click()
    }, 1);
  }
  

  render() {
    return (
      <div className="container">
        <General general={this.state.general} showGeneralModal={this.showGeneralModal} setGeneralState={this.setGeneralState} />
        <Practical practical={this.state.practical}
                   showPracticalModal={this.showPracticalModal}
                   setPracticalState={this.setPracticalState}
                   removeJob={this.removeJob}
                   addJob={this.addJob} />
        <Education education={this.state.education}
                   showEducationModal={this.showEducationModal}
                   setEducationState={this.setEducationState}
                   removeSchool={this.removeSchool}
                   addSchool={this.addSchool} />
      </div>
      
    );
  };
};

export default App;