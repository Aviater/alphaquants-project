import React, { Component } from 'react';

class Positions extends Component {
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
		                    	<h6 className="panel-title txt-dark">All Positions</h6>
		                  	</div>
		                  	<div className="pull-right">
		                    	<a href="#" className="pull-left inline-block refresh mr-15">
		                      		<i className="zmdi zmdi-replay"></i>
		                    	</a>
		                    	<a href="#" className="pull-left inline-block full-screen mr-15">
		                      		<i className="zmdi zmdi-fullscreen"></i>
		                    	</a>
		                    	<div className="pull-left inline-block dropdown">
		                      		<a className="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false" role="button"><i className="zmdi zmdi-more-vert"></i></a>
		                      		<ul className="dropdown-menu bullet dropdown-menu-right"  role="menu">
				                        <li role="presentation"><a href="javascript:void(0)" role="menuitem"><i className="icon wb-reply" aria-hidden="true"></i>option 1</a></li>
				                        <li role="presentation"><a href="javascript:void(0)" role="menuitem"><i className="icon wb-share" aria-hidden="true"></i>option 2</a></li>
				                        <li role="presentation"><a href="javascript:void(0)" role="menuitem"><i className="icon wb-trash" aria-hidden="true"></i>option 3</a></li>
		                      		</ul>
		                    	</div>
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
						                            <th>Instrument</th>
						                            <th>Last</th>
						                            <th>Change</th>
						                            <th>Position</th>
						                            <th>P &amp; L</th>
					                            </tr>
				                          	</thead>
				                          	<tbody>
					                          	<tr>
						                            <td className="weight-600">NQ</td>
						                            <td>6983.25</td>
						                            <td><span className="label label-outline label-danger">-44.25</span> </td>
						                            <td>-2</td>
						                            <td><i className="pr-10 txt-success"></i>1.8K</td>
					                          	</tr>
					                          	<tr>
						                            <td className="weight-600">YM</td>
						                            <td>25363</td>
						                            <td><span className="label label-outline label-danger">-104</span> </td>
						                            <td>-2</td>
						                            <td><i className="pr-10 txt-success"></i>1.07K</td>
					                          	</tr>
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

export default Positions;