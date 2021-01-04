import React, { Component } from 'react';
import Row from './Row';

class Transactions extends Component {

	transactionsList() {
		if(this.props.transactions.length > 0) {
			return this.props.transactions.map((transaction, index) => {
				return 	<Row 
							key={index}
							date={transaction.date}
							quarter={transaction.quarter}
							amount={transaction.amount}
							concept={transaction.concept}
						/>
			})
		} else {
			return <tr><td>No transactions to display.</td></tr>
		}
	}

  	render() {
    	return (
    		<div className="row">
	            <div className="col-sm-12 col-xs-12">
	              	<div className="panel panel-default card-view border-panel panel-refresh">
		                <div className="refresh-container">
		                  	<div className="la-anim-1"></div>
		                </div>
		                <div className="panel-heading">
		                  	<div className="pull-left">
		                    	<h6 className="panel-title txt-dark">Transactions</h6>
		                  	</div>
		                  	<div className="pull-right">
		                    	{this.props.button}
		                  	</div>
		                  	<div className="clearfix"></div>
		                </div>
		                <div className="panel-wrapper collapse in">
		                  	<div className="panel-body">
			                    <div className="table-wrap">
			                      	<div className="table-responsive">
				                        <table className="table  table-striped mb-0">
				                          	<thead>
					                            <tr>
													<th>Date</th>
						                            <th>Quarter</th>
						                            <th>Amount</th>
													<th>Concept</th>
					                            </tr>
				                          	</thead>
				                          	<tbody>
						                        {this.transactionsList()}
				                          	</tbody>
				                        </table>
			                      	</div>
			                    </div>
		                  	</div>
		                </div>
		            </div>
		        </div>
	        </div>
    	)
    }
}

export default Transactions;