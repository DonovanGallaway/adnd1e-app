import './App.css';
import Buttons from './components/Buttons'
import {useState} from 'react'
import data from './data'
import Table from './components/Table'

function App() {

  const [table, setTable] = useState(null)

  const getTable = (index) =>{
    setTable(data.tables[index])
    console.log(table)
  }



  return (
    <div className="App">
      <Buttons getTable={getTable}/>
      <Table table={table}/>
    </div>
  );
}

export default App;
