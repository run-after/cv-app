import React from 'react';
import '../styles/Education.css';

class Education extends React.Component {
  constructor() {
    super()
    this.state = { }
  }

  render() {
    return (
      <div className='education'>
        <h3 className='title'>Education</h3>
        <div className="school">
          <h4 className='school-name'>School 1</h4>
          <h6 className='location'>Location 1</h6>
          <p className='dates'>1/19 - Current</p>
          <p className='summary'>Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
        </div>
        <div className="school">
          <h4 className='school-name'>School 2</h4>
          <h6 className='location'>Location 2</h6>
          <p className='dates'>1/18 - 1/19</p>
          <p className='summary'>Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
        </div>
      </div>
    )
  }
}

export default Education;