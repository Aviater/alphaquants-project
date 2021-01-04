import React, { Component } from 'react';
import LeftMenu from '../LeftMenu/LeftMenu';
import Footer from '../Footer/Footer';
import Row from './Row';
import EditPerformance from './EditPerformance/EditPerformance';
import Utils from '../../utils/Utils';

const Admin = (props) => {

    const generateUserList = () => {
		if(props.users.length > 0) {
			return props.users.map(user => {
				return 	<Row key={user._id}
							id={user._id}
							username={user.username}
							email={user.email}
							phone={user.phone}
							company={user.company}
							address={user.address}
							country={user.country}
							balance={Utils.numberWithCommas(user.balance)}
							equity={Utils.numberWithCommas(user.equity)}
							dividends={Utils.numberWithCommas(user.dividends)}
						/>
			})
		} else {
			return <tr><td>No users in database</td></tr>
		}	
    }
    
    const notifications = () => {
		if(props.updated === 'ok') {
			return 	<div id="alert" className="alert alert-primary" role="alert">
						User updated successfully!
						<button type="button" onClick={() => {Utils.destroyAlert()}} className="btn-close" data-bs-dismiss="alert" aria-label="Close">x</button>
					</div>
		} else if(props.updated === 'error') {
			return 	<div id="alert" className="alert alert-secondarye" role="alert">
						An error has occured...
						<button type="button" onClick={() => {Utils.destroyAlert()}} className="btn-close" data-bs-dismiss="alert" aria-label="Close">x</button>
					</div>
		} else {
			return;
		}
	}

      return (
        <div className="admin-panel container-fluid">
				<LeftMenu />
				{notifications()}
				<div className="row">
					<div className="col-sm-12">
						<div className="panel panel-default card-view">
							<div className="panel-wrapper collapse in">
								<div className="panel-body">
									<div className="table-wrap">
										<div className="table-responsive">
											<table className="table table-hover display  pb-30" >
												<thead>
													<tr>
														<th>Name</th>
														<th>Email</th>
														<th>Phone</th>
														<th>Company</th>
														<th>Address</th>
														<th>Country</th>
														<th>Balance</th>
														<th>Equity</th>
														<th>Dividends</th>
													</tr>
												</thead>
												<tbody>
													{generateUserList()}
												</tbody>
											</table>
											
											<form className="add-user" onSubmit={props.handleSubmit}>
												<h4>Add new user</h4>
											  	<div className="row">
												    <div className="col-sm-4">
												      	<input type="text" required className="form-control" placeholder="Full Name" onChange={props.handleChangeUsername} />
												      	<input type="email" required className="form-control" placeholder="Email" onChange={props.handleChangeEmail} data-container="body" data-toggle="popover" data-trigger="focus" data-placement="top" data-content="Must be identical to the Okta user's email address." />
												      	<input type="text" required className="form-control" placeholder="Phone Number" onChange={props.handleChangePhone} />
												    </div>
												    <div className="col-sm-4">
												      	<input type="text" className="form-control" placeholder="Company" onChange={props.handleChangeCompany} />
												      	<input type="text" required className="form-control" placeholder="Address" onChange={props.handleChangeAddress} />
												      	<input type="text" required className="form-control" placeholder="Country" onChange={props.handleChangeCountryy} />
												    </div>
												    <div className="col-sm-4">
												      	<input type="text" required className="form-control" placeholder="Equity" onChange={props.handleChangeEquity} />
												      	<input type="text" id="buffer" />
												      	<input type="submit" value="Create" className="btn btn-success" />
												    </div>
											  	</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>	
					</div>
				</div>
				
				<EditPerformance 
					historical={props.historical}
					thisYear={Utils.dateAndQuarterSetter().year}
				/>

			</div>
        )  

}

export default Admin;
