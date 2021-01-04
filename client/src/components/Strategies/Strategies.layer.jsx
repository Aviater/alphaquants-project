import moment from 'moment';

class StrategiesController {

    constructor(data) {
        this.data = data;
    }

    formatDisplayData() {
        // Data headers are pre-saved in the same array.
        let displayData = [['Date', 'Low', 'Open', 'Close', 'High', {type: 'string', role: 'tooltip'}, 'Top Band', 'Smooth Price', 'Bottom Band']];

        for(let i = 0; i < this.data.length; i+=2) {
            let entry = [];
            entry.push(moment(this.data[i].openTimestamp).format('DD/MM/YYYY - HH:mm'));
            entry.push(Number(this.data[i].lowPrice));
            entry.push(Number(this.data[i].openPrice));
            entry.push(Number(this.data[i].closePrice));
            entry.push(Number(this.data[i].highPrice));
            entry.push(`Low: ${this.data[i].lowPrice} \n
                        Open: ${this.data[i].openPrice} \n
                        Close: ${this.data[i].closePrice} \n
                        High: ${this.data[i].highPrice} \n
                        ${moment(this.data[i].openTimestamp).format('HH:mm:ss')}`);
            entry.push(Number(this.data[i].topBand));
            entry.push(Number(this.data[i].smoothPrice));
            entry.push(Number(this.data[i].bottomBand));
            
            displayData.push(entry);
            
        };

        return displayData;
    }

}

export default StrategiesController