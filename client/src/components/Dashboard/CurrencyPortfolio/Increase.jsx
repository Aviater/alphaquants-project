import React from 'react';

const Increase = (props) => {
	return (
		<div>
		    <span className="block weight-600 txt-dark font-16">
		  		<img src="./img/money/percent.png" alt="percentage"/> Increase
		  	</span>
		  	<span className="block">
		  		<span className="initial"></span>
		  		<span className="txt-violet weight-300 data-rep">{props.performanceTotal}</span> %
		  	</span>
	  	</div>
	)  
}

export default Increase;