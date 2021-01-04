import React from 'react';

const Profile = props => {
	return (
		<div className="profile-box">
			<div className="profile-info text-center mb-15">
			<h6 className="block pb-20 client-id">Client id: {props.id}</h6>
				<h5 className="block mt-10 mb-5 weight-500 capitalize-font txt-dark"><i className="icon-user"></i> {props.username}</h5>
				<br />
				<h6 className="block pb-20"><i className="icon-envelope-open"></i> {props.email}</h6>
				<h6 className="block capitalize-font pb-20"><i className="icon-phone"></i> {props.phone}</h6>
				<h6 className="block capitalize-font pb-20"><i className="fa fa-building"></i> {props.company}</h6>
				<h6 className="block capitalize-font pb-20"><i className="fa fa-map-marker"></i> {props.address}</h6>
				<h6 className="block capitalize-font pb-20"><i className="fa fa-globe"></i> {props.country}</h6>
			</div>
		</div>
	)

}

export default Profile;
