import React, {useState} from 'react'
import './ExpenseForm.css';

const ExpenseForm = (props) => {

  //First way of doing the multiple state update and this is recommended and preffered way of react developers
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) =>{
    setEnteredTitle(event.target.value);
  }
  const amountChangeHandler = (event) =>{
    setEnteredAmount(event.target.value);
  }
  const dateChangeHandler = (event) =>{
    setEnteredDate(event.target.value);
  }

  // Second way which is not recommended because depending on previous state with variable userInput raise error some times
  // since the useState suhedule the state updations and lets say there numerous state updatation at the same time,
  // the userInput object can be any state like outdated or incorrect rather than being the latest state.
  /*
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount:'',
    enteredDate:'',
  })

  const titleChangeHandler = (event) =>{
    setUserInput({
      ...userInput,
      enteredTitle:event.target.value
    });
  }
  const amountChangeHandler = (event) =>{
    setUserInput({
      ...userInput,
      enteredTitle:event.target.value
    });
  }
  const dateChangeHandler = (event) =>{
    setUserInput({
      ...userInput,
      enteredTitle:event.target.value
    });
  }*/

  // Third way will make sure that the prevState is the latest state even though there are numerous state updatations
  // which is parameter in the anonymous function passed to setUserInput.
  /*
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount:'',
    enteredDate:'',
  })

  const titleChangeHandler = (event) =>{
    setUserInput((prevState) =>{
      return {...prevState, enteredTitle: event.target.value}
    });
  }
  const amountChangeHandler = (event) =>{
    setUserInput((prevState) =>{
      return {...prevState, enteredAmount: event.target.value}
    });
  }
  const dateChangeHandler = (event) =>{
    setUserInput((prevState) =>{
      return {...prevState, enteredDate: event.target.value}
    });
  }
  */

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    }
    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} required/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} required />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min='2019-01-01' max="2024-12-31" value={enteredDate} onChange={dateChangeHandler} required />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
