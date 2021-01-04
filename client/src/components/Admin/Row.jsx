import React from 'react';

const Row = props => {

	const OnClick = () => {
		window.location = '/user/' + props.id;
	}

	return (
		<tr id="entry" onClick={OnClick}>
			<td>{props.username}</td>
			<td>{props.email}</td>
			<td>{props.phone}</td>
			<td>{props.company}</td>
			<td>{props.address}</td>
			<td>{props.country}</td>
			<td>{props.balance}</td>
			<td>{props.equity}</td>
			<td>{props.dividends}</td>
		</tr>
	)

}

export default Row;