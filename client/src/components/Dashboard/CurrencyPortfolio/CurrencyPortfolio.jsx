import React from 'react';
import Balance from './Balance';
import Equity from './Equity';
import Dividends from './Dividends';
import Increase from './Increase';

const CurrencyPortfolio = (props) => {
	return (
      	<div className="panel panel-default border-panel card-view panel-refresh">
            <div className="refresh-container">
            	<div className="la-anim-1"></div>
            </div>
        	<div className="panel-heading">
                <div className="pull-left portfolio">
                	<h6 className="panel-title txt-dark">Portfolio</h6>
                </div>
              	<div className="clearfix"></div>
            </div>
        	<div className="panel-wrapper collapse in">
          		<div className="panel-body">
                    <div className="flex-stat flex-stat-3 text-center">

                    	<Balance {...props}/>

                      	<hr className="light-grey-hr row mt-10 mb-15"/>

                      	<Equity {...props}/>

                      	<hr className="light-grey-hr row mt-10 mb-15"/>

						<Dividends {...props}/>

						<hr className="light-grey-hr row mt-10 mb-15"/>

                      	<Increase {...props}/>

                    </div>
         		</div>  
        	</div>
      	</div>  
	)
}

export default CurrencyPortfolio;