import '../styles/Education.css';

const Education = (props) => {

  return (
    <div className='education'>
      <h3 className='title'>Education</h3>
      <button className='action-btn add-button' onClick={props.addSchool}>+</button>
      
      
      {/* Loops through each job in props and creates a card */
        Object.keys(props.education).map((key) => {
          const school = props.education[key];
          return (
            <div className="school" id={key} key={key}>
              <div className='education-modal'>
                <form onSubmit={props.setEducationState}>
                  <input type='text' style={{ width: '90%' }} defaultValue={school.name} />
                  <input type='text' style={{ width: '90%'}}  defaultValue={school.location} />
                  <input tyep='text' style={{ width: '90%' }} defaultValue={school.dates} />
                  <textarea style={{width: '95%'}} defaultValue={school.summary} />
                  <button type='submit' style={{ width: '100%'}}>Submit</button>
                </form>
              </div>
              <button className='action-btn edit-button' onClick={props.showEducationModal}>&#9998;</button>
              <button className='action-btn delete-button' onClick={props.removeSchool}>&#128465;</button>
              <h4 className='job-title'>{school.name}</h4>
              <h6 className='location'>{school.location}</h6>
              <p className='dates'>{school.dates}</p>
              <p className='summary'>{school.summary}</p>
            </div>
          )
        })
      } 
    </div>
  )
}

export default Education;