import React, { useState } from "react";
import "./add-form.css";
import { categories } from "../constants/add-expense.js";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import SuccessModal from "./success-modal.js";
import { addExpense } from "../redux/expenseSlice.js";

const AddForm = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const cat = categories;
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState();
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleAmount = (e) => {
    // forcing the user to input valid data
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      setAmount("");
      return;
    }
    setAmount(val);
  };
  const handleCategory = (category) => {
    setCategory(category);
    setCategoryOpen(false);
  };

  const handleSubmit = () => {
    if (title === "" || amount === "" || !category) {
      const notify = () => toast("Please enter complete data");
      notify();
      return;
    }
    // restricting user to put mutiple records with same title
    const parsedState=JSON.parse(localStorage.getItem("expenseList"));
    if (parsedState.some((item)=>item.title===title)) {
      const notify = () => toast("Title already exists!!");
      notify();
      return;
    }
    const data = {
      title,
      amount,
      category,
      createdAt: new Date(),
    };
    dispatch(addExpense(data));
    // modal will appear only after successful expense entry
    setModalOpen(!modalOpen);
  };

  return (
    <div className="add-form">
      <SuccessModal modalOpen={modalOpen} />
      {/* toaster on bottom to work,container is needed */}
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      <div className="form-item">
        <label>Title</label>
        <input
          placeholder="Give a name to your expenditure"
          value={title}
          onChange={(e) => handleTitle(e)}
        />
      </div>
      <div className="form-item">
        <label>Amount ₹</label>
        <input
          placeholder="Enter Amount"
          className="amount-input"
          onChange={(e) => handleAmount(e)}
          value={amount}
        />
      </div>
      <div className="category-container-parent">
        <div className="category">
          <div
            className="category-dropdown"
            onClick={() => setCategoryOpen(!categoryOpen)}
          >
            <label>{category ? category.title : "Category"}</label>
            <i class="fi-rr-angle-down"></i>
          </div>
          {categoryOpen && (
            <div className="category-container">
              {cat.map((category) => (
                <div
                  className="category-item"
                  style={{ borderRight: `5px solid ${category.color}` }}
                  key={category.id}
                  onClick={() => handleCategory(category)}
                >
                  <label>{category.title}</label>
                  <img src={(category.icon)} alt={category.title} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="form-add-button">
        <div onClick={handleSubmit}>
          <label>Add</label>
          <i class="fi-rr-paper-plane"></i>
        </div>
      </div>
    </div>
  );
};

export default AddForm;