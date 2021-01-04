import React from 'react';

const Dividends = (props) => {
	return (
		<div>
		    <span className="block weight-600 txt-dark font-16">
				<img src="./img/money/eur.png" alt="money"/> Dividends
			</span>
		  	<span className="block">
		  		<span className="initial"></span>
		  		<span className="txt-violet weight-300 data-rep">{props.dividends}</span> €
		  	</span>
		</div>
	)  
}

export default Dividends;