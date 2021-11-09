import data from '../data'

const Buttons = (props) => {

    const handleClick = (event) =>{
        props.getTable(event.target.dataset.index)
    }  
 
  return <div>
      <div className='buttons'>
          {data.tables.map((role, index)=>{
              return <button key={index} data-index={index} onClick={handleClick}>{role.name}</button>
          })}
      </div>
    </div>
}


export default Buttons