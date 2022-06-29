import React from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import Card from "./Card";
import "./expense-list.css";
const ExpenseList = () => {
  const { expenseList: list, query } = useSelector((state) => state.expenses);
  // filtering the cards according to the query
  const filteredList = list.filter((item) => item.title.toLowerCase().includes(query));
  const notifySuccess = () => toast.success("Expense Deleted!");
  return (
    <div className="expense-list">
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      {filteredList.length ? (
        filteredList.map((item) => {
          return <Card key={item.title} item={item} notifySuccess={notifySuccess} />
        })
      ) : (
        <div className="empty-state">
          <img
            src={require("../assets/images/empty.png")}
            alt="No Expenses"
            className="empty-image"
          />
          <label>Uh Oh! Your expense list is empty.</label>
        </div>
      )}
    </div>

  );
};

export default ExpenseList;