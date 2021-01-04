import React from 'react';

const Equity = (props) => {
	return (
		<div>
		    <span className="block weight-600 txt-dark font-16">
		  		<img src="./img/money/eur.png" alt="money"/> Equity
		  	</span>
		  	<span className="block">
		  		<span className="initial"></span>
		  		<span className="txt-violet weight-300 data-rep">{props.equity}</span> €
		  	</span>
		</div>
	)  
}

export default Equity;