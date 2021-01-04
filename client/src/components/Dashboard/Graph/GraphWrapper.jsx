import React, { Component } from 'react';
import GraphUser from './GraphUser';
import BarUser from './BarUser';
import GraphHistorical from './GraphHistorical';

class GraphWrapper extends Component {

	constructor(props) {
		super(props);
		
		this.showGraphUser = this.showGraphUser.bind(this);
		this.showGraphHistorical = this.showGraphHistorical.bind(this);
		this.showBarUser = this.showBarUser.bind(this);

		this.state = {
			graphShown: 'user',
			graphText: 'Accumulated Performance',
			pressed: 'active'
		}
	}

	showGraphUser = () => {
		this.setState({
			graphShown: 'user',
			graphText: 'Accumulated Performance'
		});
	}

	showGraphHistorical = () => {
		this.setState({
			graphShown: 'historical',
			graphText: 'Performance'
		});
	}

	showBarUser = () => {
		this.setState({
			graphShown: 'bar',
			graphText: 'Monthly Performance'
		});
	}

	showSelectedGraph = () => {
		switch(this.state.graphShown) {
			case'user':
				return <GraphUser 
							{...this.props}
						/>
			case 'bar':
				return <BarUser 
							{...this.props}
						/>
			case 'historical':
				return <GraphHistorical
							{...this.props}
						/>
		}
	}

	render() {
		return (
			<div className="graph panel panel-default border-panel card-view">
				<div className="panel-heading">
					<span className="graph-last-updated">Last updated:<br/> {this.props.lastUpdated}</span>
					<div className="graph">
						<button type="button" data-toggle="tooltip" data-placement="bottom" title="Your accumulated performance data." onClick={this.showGraphUser} className="btn btn-info btn-chart"><i className="fa fa-chart-line"></i></button>
						<button type="button" data-toggle="tooltip" data-placement="bottom" title="Your performance data." onClick={this.showBarUser} className="btn btn-info btn-chart"><i className="fa fa-chart-bar"></i></button>
						<button type="button" data-toggle="tooltip" data-placement="bottom" title="Your multi-data." onClick={this.showGraphHistorical} className="btn btn-info btn-chart"><i className="fa fa-chart-area"></i></button>
						<h6 className="panel-title txt-dark graph-title">{this.state.graphText}</h6>
					</div>
				</div>
				
				{this.showSelectedGraph()}

			</div>
		) 
	}
}

export default GraphWrapper;