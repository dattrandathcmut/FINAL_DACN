import React from 'react';
import classes from './Table.module.css';

// import Button from '../Button/Button';

const Table = (props) => {
	// const transmitID = (id) => {
	// 	props.handlePayment(id);
	// };
	console.log(props.data.data);
	if (!Array.isArray(props.data.data)) {
		console.error('props.data must be an array');
		return null;
	}
	return (
		<table className={classes.table}>
			<tbody>
				<tr key='head'>
					{props.columns.map((head) => {
						if (head.header !== 'Action') {
							return <th key={head.header}>{head.header}</th>;
						} else {
							return (
								<th key='action' className={classes.rightFormat}>
									{head.header}
								</th>
							);
						}
					})}
				</tr>

				{props.data.data.map((row, index) => (
					<tr key={index}>
						{props.columns.map((col) => {
							if (col.field === 'ts') {
								let date = new Date(row[col.field]);
                                let formattedDate = date.toLocaleString();
								return <td key={row[col.field]}>{formattedDate} </td>;
							} else if (col.field !== 'action') {
								return <td key={row[col.field]}>{row[col.field]}</td>;
							} else {
								return (
									<td key='button' className={classes.rightFormat}>
										<button
											className='btn gre'
											onClick={() => transmitID(row['id'])}
										>
											{col.content}
										</button>
									</td>
								);
							}
						})}
					</tr>
				))}
			</tbody>
		</table>
	);
};
export default Table;
