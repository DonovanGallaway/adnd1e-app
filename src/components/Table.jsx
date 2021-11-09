import data from '../data'

const Table = (props) => {
 if(props.level){  
  const values = props.table.columns
  return <div>
  <div className='table'>
    <table>
      <thead>
        <tr>
        <th></th>
        {data.ac.map((x,index) =>{
          return <th key={index + x}>{x}</th>
        })}
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>Roll</td>
        {props.table.columns[props.level.index][props.level.stuff].map((x,index)=>{
          const key = `roll ${index}`
          return <td key={key}>{x}</td>          
        })}
        </tr>
      </tbody>
    </table>
      
  </div>
</div>
 } else{
   return <h1></h1>
 }
  
}


export default Table