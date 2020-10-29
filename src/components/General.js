import React from 'react';
import '../styles/General.css';

class General extends React.Component {
  constructor() {
    super()
    this.state = { }
  }

  render() {
    return (
      <div className='general'>
        <h1 className='name'>John Doe</h1>
        <a className='email' href="mailto:example@example.com">example@example.com</a>
        <span className='phone'>555-555-5555</span>
      </div>
    )
  }
}

export default General;