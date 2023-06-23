import React from 'react'
import { category } from './category'
interface Props{
    OnSelectCategory:(category:string) => void
}

const ExpensFilter = ({OnSelectCategory}:Props) => {


  return (
    <select onChange={(e)=>OnSelectCategory(e.target.value)} >
        <option value="">Select Category</option>
        {category.map((category)=> <option key={category} value={category}>{category}</option>)}
    </select>
  )
}

export default ExpensFilter