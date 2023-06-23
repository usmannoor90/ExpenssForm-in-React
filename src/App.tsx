import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpensList from './assets/Components/ExpensList'
import ExpensFilter from './assets/Components/ExpensFilter'
import ExpensesForm from './assets/Components/ExpensesForm'



function App() {

  const [selectedCategory, setSelectedCategory] = useState("")

  const [expenses, setExpenses]  = useState(
  [
    {id:1, description: "aaa",amount:10, category:'Utilities'},
    {id:2, description: "bbb",amount:10, category:'Utilities'},
    {id:3, description: "ccc",amount:10, category:'Utilities'},
    {id:4, description: "ddd",amount:10, category:'Utilities'}
    ]
)

const visiblecategory = selectedCategory ? expenses.filter(e => e.category === selectedCategory) : expenses ;


  return (
    <div className="App">
              <div>
        <ExpensesForm onSubmit={(newexpens)=> setExpenses([...expenses, {...newexpens, id:expenses.length +1} ]) }/>
        </div>
      <div >
        <ExpensFilter OnSelectCategory={(category)=> setSelectedCategory(category)}/>
      </div>


     <ExpensList expense={visiblecategory} OnDelete={(id)=>{ setExpenses(expenses.filter(e=> e.id !== id))}}/>
    </div>
  )
}

export default App
