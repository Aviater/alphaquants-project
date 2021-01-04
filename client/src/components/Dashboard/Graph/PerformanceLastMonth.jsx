import React from 'react';
import Utils from '../../../utils/Utils';

const PerformanceLastMonth = (props) => {
  return (
	    <li>
	        <span className="block">
	            <i className={Utils.setArrow(props.graphHeaderData.middle)}></i><span className="txt-dark weight-300 data-rep">{props.graphHeaderData.middle}</span>
	        </span>
  			<span className="block">{props.graphText.middle}</span>
	    </li>
  	)  
}

export default PerformanceLastMonth;