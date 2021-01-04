import React from 'react';
import Utils from '../../../utils/Utils';

const Row = props => {

    let arrow = () => {
		if(Number(props.amount) <= 0) {
			return 'zmdi zmdi-caret-down pr-10 font-24 text-danger';
		} else {
			return 'zmdi zmdi-caret-up pr-10 font-24 text-success some-space';
		}
	}

	return (
		<tr className="entry">
			<td>{props.date}</td>
			<td>{props.quarter}</td>
			<td><i className={arrow()}></i>{Utils.numberWithCommas(props.amount)}</td>
            <td>{props.concept}</td>
		</tr>
	)

}

export default Row;