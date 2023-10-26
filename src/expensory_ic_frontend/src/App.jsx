import * as React from "react";

import logo from "../assets/logo.png";
import robo from "../assets/robo.png";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { AppProvider } from "./context/AppContext";
import Budget from "./components/Budget";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import RemainingBudget from "./components/Remaining";
import ExpenseChart from "./components/ExpenseChart";

const App = () => {
  return (
    <AppProvider>
      <div class="logo-and-text">
        <img src={logo} alt="Logo" className="logo" />
        <h1 class="mt-3 font-weight-bold">Expensory</h1>
        <img src={robo} alt="robo" className="robo" />
        <div id="stars"></div>
      </div>

      <div className="container">
        <h3 className="web-txt">
          A basic web-based expense tracking application built on the Web3
          platform.
        </h3>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <RemainingBudget />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
        </div>
        <br />
        <div className="row mt-3 box2">
          <h3 style={{ color: "white", margin: "5px" }}>Add Expense</h3>
          <br></br>
          <div className="col-lg-8">
            <div
              className="card add-expense"
              style={{ backgroundColor: "#bbbbbb" }}
            >
              <AddExpenseForm />
            </div>
          </div>
          <div className="col-lg-4 chart-col">
            <div
              className="card expense-chart"
              style={{ backgroundColor: "#bbbbbb" }}
            >
              <ExpenseChart />
            </div>
          </div>
        </div>

        <h3
          className="mt-3"
          style={{ color: "black", margin: "0 20px 15px 0 " }}
        >
          Expenses
        </h3>
        <div className="row ">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;