import React from 'react';
import Utils from '../../../utils/Utils';

const PerformanceCurrentMonth = (props) => {
	return (
	    <li>
	        <span className="block">
	            <i className={Utils.setArrow(props.graphHeaderData.right)}></i><span className="txt-dark weight-300 data-rep">{props.graphHeaderData.right}</span>
	        </span>
	      <span className="block">{props.graphText.right}</span>
	    </li>
	)  
}

export default PerformanceCurrentMonth;