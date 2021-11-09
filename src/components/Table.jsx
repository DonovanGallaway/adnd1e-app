import data from '../data'

const Table = (props) => {
 if(props.table){
   console.log(props.table.columns)
  
  const values = props.table.columns
  return <div>
  <div className='table'>
    <table>
      <thead>
        <tr>
        <th>Level</th>
        {data.ac.map((x,index) =>{
          return <th key={index + x}>{x}</th>
        })}
        </tr>
      </thead>
      <tbody>
        {props.table.columns.map((x,index)=>{
          const topKey = `row ${x+index}`
          return <tr key={topKey}>
            {Object.keys(x).map((y)=> {
              const uniqueKey = `level ${y}`
              return <td key={uniqueKey}>{y}</td>})}
            {Object.values(values[index]).map((y) =>{
              return y.map((z, index)=> {
                const key = `value ${y} ${z} z${index}`
                return <td key={key}>{z}</td>})
            })}
          </tr>
        })}
      </tbody>
    </table>
      
  </div>
</div>
 } else{
   return <h1>Please Select a table to render</h1>
 }
  
}


export default Table