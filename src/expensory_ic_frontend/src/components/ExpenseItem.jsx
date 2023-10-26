import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
	const { dispatch } = useContext(AppContext);

	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};

	const styles = {
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#f9f9f9', 
    padding: '10px',
    margin: '2px 0',
    borderRadius: '5px',
  },
  name: {
    flex: '1',
    marginRight: '1rem',
    fontWeight: 'bold', 
  },
  cost: {
    flex: '1',
    marginRight: '1rem',
    textAlign: 'center',
    color: '#3498db',
	fontWeight: 'bold',
  },
  actions: {
    flex: '1',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  badge: {
    backgroundColor: '#27ae60', 
    color: '#fff', 
	width: '100px',
    padding: '5px 10px',
	textAlign: 'center',
    borderRadius: '3px',
    marginRight: '10px',
  },
  deleteIcon: {
    cursor: 'pointer', 
    color: 'red', 
	fontSize: '1.8rem',
  },
};


	return (
		<li style={styles.listItem}>
  <div style={styles.name}>{props.name}</div>
  <div style={styles.cost}>₹{props.cost}</div>
  <div style={styles.actions}>
    <span style={styles.badge}>₹{props.cost}</span>
    <TiDelete style={styles.deleteIcon} onClick={handleDeleteExpense} />
  </div>
</li>
	  );
	  
};

export default ExpenseItem;