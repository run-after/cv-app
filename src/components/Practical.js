import React from 'react';
import '../styles/Practical.css';

class Practical extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='practical'>
        <button className='edit-button'>&#9998;</button>
        <h3 className='title'>Experience</h3>
        <div className="job">
          <h4 className='job-title'>Job 1</h4>
          <h6 className='location'>Location 1</h6>
          <p className='dates'>1/19 - Current</p>
          <p className='summary'>Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
        </div>
        <div className="job">
          <h4 className='job-title'>Job 2</h4>
          <h6 className='location'>Location 2</h6>
          <p className='dates'>1/18 - 1/19</p>
          <p className='summary'>Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
        </div>
        <div className="job">
          <h4 className='job-title'>Job 3</h4>
          <h6 className='location'>Location 3</h6>
          <p className='dates'>1/17 - 1/18</p>
          <p className='summary'>Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
        </div>
        <div className="job">
          <h4 className='job-title'>Job 4</h4>
          <h6 className='location'>Location 4</h6>
          <p className='dates'>1/16 - 1/17</p>
          <p className='summary'>Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
        </div>
      </div>
    )
  }
}

export default Practical;