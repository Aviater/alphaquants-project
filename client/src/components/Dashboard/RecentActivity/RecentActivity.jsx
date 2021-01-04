import React, { Component } from 'react';

class RecentActivity extends Component {
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
		                    	<h6 className="panel-title txt-dark">Recent Trading Activity</h6>
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
						                            <th>Trade Time</th>
						                            <th>Status</th>
						                            <th>Quantity</th>
						                            <th>Last Trade</th>
					                            </tr>
				                          	</thead>
			                          		<tbody>
				                          		<tr>
						                            <td className="weight-600"><i className="fa fa-dot-circle-o pr-10 txt-success"></i>DAX</td>
						                            <td>08:30:00</td>
						                            <td><span className="label label-outline label-success">Sold</span> </td>
						                            <td>1</td>
						                            <td><i className="fa fa-plus pr-10 txt-success"></i>11595.00 USD</td>
				                          		</tr>
					                          	<tr>
						                            <td className="weight-600"><i className="fa fa-dot-circle-o pr-10 txt-danger"></i>NQ</td>
						                            <td>09:15:00</td>
						                            <td><span className="label label-outline label-danger">Bought</span> </td>
						                            <td>2</td>
						                            <td><i className="fa fa-minus pr-10 txt-danger"></i>7162.25 USD</td>
					                          	</tr>
					                          	<tr>
						                            <td className="weight-600"><i className="fa fa-dot-circle-o pr-10 txt-success"></i>DAX</td>
						                            <td>09:40:00</td>
						                            <td><span className="label label-outline label-success">Sold</span> </td>
						                            <td>1</td>
						                            <td><i className="fa fa-plus pr-10 txt-success"></i>11574.00 USD</td>
					                          	</tr>
					                          	<tr>
						                            <td className="weight-600"><i className="fa fa-dot-circle-o pr-10 txt-success"></i>NQ</td>
						                            <td>13:25:00</td>
						                            <td><span className="label label-outline label-success">Sold</span> </td>
						                            <td>2</td>
						                            <td><i className="fa fa-plus pr-10 txt-success"></i>7153.25 USD</td>
					                          	</tr>
					                          	<tr>
						                            <td className="weight-600"><i className="fa fa-dot-circle-o pr-10 txt-danger"></i>DAX</td>
						                            <td>14:34:07</td>
						                            <td><span className="label label-outline label-danger">Bought</span> </td>
						                            <td>1</td>
						                            <td><i className="fa fa-minus pr-10 txt-danger"></i>11614.50 USD</td>
					                          	</tr>
					                          	<tr>
						                            <td className="weight-600"><i className="fa fa-dot-circle-o pr-10 txt-danger"></i>DAX</td>
						                            <td>15:00:01</td>
						                            <td><span className="label label-outline label-danger">Bought</span> </td>
						                            <td>1</td>
						                            <td><i className="fa fa-minus pr-10 txt-danger"></i>11620.50 USD</td>
					                          	</tr>
					                          	<tr>
						                            <td className="weight-600"><i className="fa fa-dot-circle-o pr-10 txt-success"></i>DAX</td>
						                            <td>16:05:33</td>
						                            <td><span className="label label-outline label-success">Sold</span> </td>
						                            <td>1</td>
						                            <td><i className="fa fa-plus pr-10 txt-success"></i>11580.00 USD</td>
					                          	</tr>
					                          	<tr>
						                            <td className="weight-600"><i className="fa fa-dot-circle-o pr-10 txt-success"></i>NQ</td>
						                            <td>16:35:00</td>
						                            <td><span className="label label-outline label-success">Sold</span> </td>
						                            <td>2</td>
						                            <td><i className="fa fa-plus pr-10 txt-success"></i>7119.00 USD</td>
					                          	</tr>
					                          	<tr>
						                            <td className="weight-600"><i className="fa fa-dot-circle-o pr-10 txt-success"></i>YM</td>
						                            <td>16:40:00</td>
						                            <td><span className="label label-outline label-success">Sold</span> </td>
						                            <td>2</td>
						                            <td><i className="fa fa-plus pr-10 txt-success"></i>25719.00 USD</td>
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

export default RecentActivity;