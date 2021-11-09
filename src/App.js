import './App.css';
import Buttons from './components/Buttons'
import {useState} from 'react'
import data from './data'
import Table from './components/Table'
import Header from './components/Header'

function App() {



  const [level, setLevel] = useState(null)

  const getLevel = (level) =>{
    setLevel(level)
  }

  const [table, setTable] = useState(null)

  const getTable = (index) =>{
    setTable(data.tables[index])
    setLevel(null)
  }



  return (
    <div className="App">
      <Header/>
      <main>
      <Buttons getTable={getTable} getLevel={getLevel} table={table}/>
      <Table table={table} level={level}/>
      </main>
    </div>
  );
}

export default App;
