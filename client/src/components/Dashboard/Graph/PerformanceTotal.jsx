import React from 'react';
import Utils from '../../../utils/Utils';

const PerformanceTotal = (props) => {
	return (
	    <li>
	        <span className="block">
	            <i className={Utils.setArrow(props.graphHeaderData.left)}></i><span className="txt-dark weight-300 data-rep">{props.graphHeaderData.left}</span>
	        </span>
	      <span className="block">{props.graphText.left}</span>
	    </li>
	)
}

export default PerformanceTotal;