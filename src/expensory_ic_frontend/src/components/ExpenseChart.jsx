import React, { useContext, useEffect, useRef } from 'react';
import { AppContext } from '../context/AppContext';
import Chart from 'chart.js/auto';

const ExpenseChart = () => {
	const { expenses } = useContext(AppContext);

	const chartRef = useRef(null);

	useEffect(() => {
		if (chartRef.current) {
			const labels = expenses.map(expense => expense.name);
			const data = expenses.map(expense => expense.cost);
			const colors = expenses.map(expense => `#${Math.floor(Math.random()*16777215).toString(16)}`);

			const chart = new Chart(chartRef.current, {
				type: 'pie',
				data: {
					labels: labels,
					datasets: [{
						data: data,
						backgroundColor: colors,
					}],
				},
			});

			return () => chart.destroy();
		}
	}, [expenses]);

	return (
		<div>
			<canvas ref={chartRef}></canvas>
		</div>
	);
};

export default ExpenseChart;
