import '../styles/General.css';

const General = (props) => {

  return (
      <div className='general'>
        <button className='edit-button' onClick={props.showGeneralModal}>&#9998;</button>
        <h1 className='name'>{props.general.name}</h1>
        <span className='email'>{props.general.email}</span>
        <span className='phone'>{props.general.phone}</span>
      
        <div className='general-modal'>
          <form onSubmit={props.setGeneralState}>
            <input type='text' defaultValue={props.general.name} />
            <input type='text' defaultValue={props.general.email} />
            <input type='text' defaultValue={props.general.phone} />
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    )
}

export default General;