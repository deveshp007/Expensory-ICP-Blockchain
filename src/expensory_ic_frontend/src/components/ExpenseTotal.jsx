import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
	const { expenses } = useContext(AppContext);

	const total = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	return (
		<div class='alert alert-primary p-4' style={{backgroundColor: "#bbbbbb"}}>
			<span>Spent so far: <b> ₹{total} </b> </span>
		</div>
	);
};

export default ExpenseTotal;