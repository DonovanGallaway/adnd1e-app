import data from '../data'

const Buttons = (props) => {

    const handleClick = (event) =>{
        props.getTable(event.target.dataset.index)
    }
    
    const handleLevel = (event) =>{
        const index = event.target.dataset.level
        const name = event.target.dataset.stuff
        props.getLevel({
            index: index,
            stuff: name
        })
    }

    if (props.table){
        return (
      <div>
      <div className='buttons'>
          {data.tables.map((role, index)=>{
              return <button key={index} data-index={index} onClick={handleClick}>{role.name}</button>
          })}
          <hr/>
          <h2>Select a Level Range</h2>
          <div className='level-buttons'>
          {props.table.columns.map((x,index) =>{
              const key=`${props.table.name} ${index}`
              const thisLevel = `${Object.keys(x)[0]}`
              return <button key={key} data-level={index} data-stuff={thisLevel} onClick={handleLevel}>{thisLevel}</button>
          })}
          </div>
      </div>
    </div>
        )

    } else{
    return <div>
      <div className='buttons'>
          {data.tables.map((role, index)=>{
              return <button key={index} data-index={index} onClick={handleClick}>{role.name}</button>
          })}
      </div>
      <h1>Please Select a Class</h1>
    </div>

    }
    
}


export default Buttons