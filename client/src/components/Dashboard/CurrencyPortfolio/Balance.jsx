import React, { Component } from 'react';


const Balance = (props) => {
	return (
		<div>
		    <span className="block weight-600 txt-dark font-16">
				<img src="./img/money/eur.png" alt="money"/> Balance
			</span>
		  	<span className="block">
		  		<span className="initial"></span>
		  		<span className="txt-violet weight-300 data-rep">{props.balance}</span> €
		  	</span>
		</div>
	)  
}

export default Balance;