import React from 'react'

interface Expense {
    id:number;
    description:string;
    amount:number;
    category:string;
}

interface Props {
expense:Expense[];
OnDelete:(id:number)=>void;
}

const ExpensList = ({expense, OnDelete }:Props) => {
if (expense.length === 0) return <p>
    no items available
</p>

  return (
<table>
    <thead>
        <tr>
            <th>description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
        </tr> 
    </thead>
    <tbody>
        {expense.map(item =>

        <tr key={item.id}>
            <td key={item.description}>{item.description}</td>
            <td key={item.amount}>{item.amount}</td>
            <td key={item.category}>{item.category}</td>
            <td >
                <button onClick={()=>OnDelete(item.id)}>
                    Delete
                </button>
            </td>
        </tr>
           
           )}

    </tbody>
    <tfoot>
        <tr>
            <td>Total Price</td>
            <td>${expense.reduce((acc ,reduc)=>           
             acc + reduc.amount, 0).toFixed(2)
            }</td>
            <td></td>
            <td></td>
        </tr>
    </tfoot>
</table>
  )
}

export default ExpensList