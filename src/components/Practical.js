import '../styles/Practical.css';

const Practical = (props) => {

  return (
    <div className='practical'>
      <h3 className='title'>Experience</h3>
      <button className='action-btn add-button' onClick={props.addJob}>+</button>
      
      
      {/* Loops through each job in props and creates a card */
        Object.keys(props.practical).map((key) => {
          const job = props.practical[key];
          return (
            <div className="job" id={key} key={key}>
              <div className='practical-modal'>
                <form onSubmit={props.setPracticalState}>
                  <input type='text' style={{ width: '90%' }} defaultValue={job.title} />
                  <input type='text' style={{ width: '90%'}}  defaultValue={job.location} />
                  <input tyep='text' style={{ width: '90%' }} defaultValue={job.dates} />
                  <textarea style={{width: '95%'}} defaultValue={job.description} />
                  <button type='submit' style={{ width: '100%'}}>Submit</button>
                </form>
              </div>
              <button className='action-btn edit-button' onClick={props.showPracticalModal}>&#9998;</button>
              <button className='action-btn delete-button' onClick={props.removeJob}>&#128465;</button>
              <h4 className='job-title'>{job.title}</h4>
              <h6 className='location'>{job.location}</h6>
              <p className='dates'>{job.dates}</p>
              <p className='summary'>{job.description}</p>
            </div>
          )
        })
      } 
    </div>
  )
  
}

export default Practical;

// Still need a way to add job experience