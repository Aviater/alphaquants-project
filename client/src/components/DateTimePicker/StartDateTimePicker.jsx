import React, {Component} from 'react';
import moment from 'moment';
import {DatetimePickerTrigger} from 'rc-datetime-picker';

class DateTimePicker extends Component {
    constructor() {
        super();
        this.state = {
            defaultTime: true,
            moment: moment(),
            startDateTime: ''
        };
    }

    componentWillReceiveProps() {
        this.setState({
            startDateTime: this.props.startDateTime
        });
    }

    handleChange = (moment, e) => {
        this.setState({
            defaultTime: false,
            moment
        });
        this.props.handleStartDateTime(moment)
    }

    render() {
        const shortcuts = {
            'Today': moment(),
            'Yesterday': moment().subtract(1, 'days')
        };

        return (
            <DatetimePickerTrigger
                shortcuts={shortcuts} 
                moment={this.state.moment}
                onChange={this.handleChange}>
                <input type="text" className="form-control" value={this.state.defaultTime ? moment(this.state.startDateTime).format('YYYY-MM-DD HH:mm:ss') : this.state.moment.format('YYYY-MM-DD HH:mm:ss')} />
            </DatetimePickerTrigger>
        );
    }
}

export default DateTimePicker