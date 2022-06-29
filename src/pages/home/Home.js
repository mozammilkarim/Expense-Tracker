import React from 'react'
import ExpenseList from '../../expenseList/ExpenseList';
import TopFold from '../../topfold/Topfold';
import "./home.css";
const Home = () => {
  return (
    <div>
      <TopFold/>
      <ExpenseList/>
    </div>
  )
}

export default Home