import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import Total from "./components/Total";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import { AppProvider } from "./context/AppContext";

const App = () => {
  return (
    <>
      <AppProvider>
        <div className="container">
          <h1 className="mt-3">My Budget Planner</h1>
          <div className="row mt-3">
            <div className="col-sm">
              <Budget />
            </div>
            <div className="col-sm">
              <Remaining />
            </div>
            <div className="col-sm">
              <Total />
            </div>
            <h3 className="mt-3">Expenses</h3>
            <div className="row mt-3">
              <div className="col-sm">
                <ExpenseList />
              </div>
            </div>
            <h3 className="mt-3">Add Expenses</h3>
            <div className="mt-3">
              <div className="col-sm">
                <AddExpenseForm />
              </div>
            </div>
          </div>
        </div>
      </AppProvider>
    </>
  );
};

export default App;
