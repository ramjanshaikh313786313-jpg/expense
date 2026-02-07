import { useState } from "react";
import "./App.css"

function App() {
  let [budget, setBudget] = useState(100)
  let [expense, setExpense] = useState({
    name: '',
    spent: 0
  });

  let [records, setRecords] = useState([]);

  let handleChange = (e) => {
    let n = e.target.name;
    let v = e.target.value;
    setExpense({
      ...expense,
      [n]: v
    })
  }

  let handleSubmit = () => {
    setRecords([...records, expense])
    setExpense({
      name: '',
      spent: ''
    });
    let spent = expense.spent;
    setBudget(budget - spent)
  }

  return (
    <>
    <div className="parent">
      <label>
        <h1>Total Budget - {budget}</h1>
      </label>
      <br /><br />
      
        <label> Name <input type="text" name='name' value={expense.name} onChange={handleChange} /> </label>
        <br /><br />
        <label> Expense <input type="number" name="spent" value={expense.spent} onChange={handleChange} /></label>
        <br /><br />
        <button onClick={handleSubmit}>Submit</button>
      </div>

      <div className="records">
        {
          records.map(
            (v, i) => {
              return (
                <>
                  <h1>name - {v.name} </h1>
                  <h2>spent - {v.spent}</h2>
                </>
              )
            }
          )
        }
      </div>
    </>
  );
}

export default App;
