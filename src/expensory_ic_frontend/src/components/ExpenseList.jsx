import React, { useContext, useState, useEffect } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
	const { expenses } = useContext(AppContext);

	const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

	useEffect(() => {
		setfilteredExpenses(expenses);
	}, [expenses]);

	const handleChange = (event) => {
		const searchResults = expenses.filter((filteredExpense) =>
			filteredExpense.name.toLowerCase().includes(event.target.value)
		);
		setfilteredExpenses(searchResults);
	};

	const styles = {
  searchBar: {
    border: '3px solid #3498db',  
    borderRadius: '5px',     
    padding: '8px 10px',        
    fontSize: '16px',           
    color: '#333',               
    backgroundColor: '#f2f2f2',  
    width: '100%',   
  },
};


	return (
		<>
			<input
  type='text'
  style={styles.searchBar}
  placeholder='Type to search...'
  onChange={handleChange}
/>
			<ul class='list-group mt-3 mb-3'>
				{filteredExpenses.map((expense) => (
					<ExpenseItem
						id={expense.id}
						name={expense.name}
						cost={expense.cost}
					/>
				))}
			</ul>
		</>
	);
};

export default ExpenseList;