import moment from 'moment';

export default class BackTestsController {

    pnl;
    accumulatedPnl = 0;
    displayData = [
        {
            pnl: 0,
            accumulatedPnl: 0
        }
    ];
    
    constructor(data) {
        this.data = data.executions;
        this.instrument = data.instrument
        this.startTime = data.startTime;
        this.endTime = data.endTime;
        this.fastDuration = data.properties.durations.fast;
        this.slowDuration = data.properties.durations.slow;
        this.fastExitDuration = data.properties.durations.exit;
        this.historicBars = data.properties.historicBars;
        this.deviationFactor = data.properties.deviationFactor;
        this.stopLossPoints = data.properties.stopPoints.stopLoss;
        this.trailStopPoints = data.properties.stopPoints.trailStop;
        this.tradeOnNeutral = JSON.stringify(data.properties.flags.tradeOnNeutral);
        this.multiplier = this.getMultiplier();
    }

    calculateDisplayData() {
        if(typeof quantity === 'undefined') {
            this.data.forEach(trade => {
                trade.quantity = 1;
            });
        }
        for(let i = 1; i < this.data.length; i += 2) {
            if(this.data[i].side == "BUY") {
                try {
                    this.pnl = (this.data[i - 1].price - this.data[i].price) * this.data[i].quantity * this.multiplier;
                } catch(err) {
                    this.pnl = 0;
                }
            } else {
                try{
                    this.pnl = (this.data[i].price - this.data[i - 1].price) * this.data[i].quantity * this.multiplier;
                } catch(err) {
                    this.pnl = 0;
                }
            }   

            this.accumulatedPnl += this.pnl;

            this.displayData.push({
                pnl: this.pnl,
                accumulatedPnl: this.accumulatedPnl,
                date: moment(this.data[i].timestamp).format('DD:MM:YYYY')
            });
        }
        
        return this.displayData;
    }

    getTotalPnl() {
        const totalPnl = this.displayData[this.displayData.length - 1].accumulatedPnl;
        return totalPnl;
    }

    getPnlPercent() {
        const firstValue = this.data[0].price * this.data[0].quantity * this.multiplier;
        const pnlPercent = ((this.getTotalPnl() / firstValue)*100).toFixed(2);
        return pnlPercent;
    }

    getTradesAmount() {
        const tradesAmount = this.data.length / 2;
        return tradesAmount;
    }

    getWinsAndLosses() {
        let wins = 0;
        let losses = 0;
        for(let i = 0; i < this.displayData.length; i++) {
            if(this.displayData[i].pnl > 0) {
                wins++;
            } else if((this.displayData[i].pnl < 0)) {
                losses++;
            }
        }

        return {
            wins,
            losses
        }
    }

    getAverageWinsAndLosses() {
        let positives = [];
        let positivesTotal = 0;
        let negatives = [];
        let negativesTotal = 0;
        for(let i = 0; i < this.displayData.length; i++) {
            if(this.displayData[i].pnl >= 0) {
                positives.push(this.displayData[i]);
                positivesTotal += this.displayData[i].pnl;
            } else if(this.displayData[i].pnl < 0) {
                negatives.push(this.displayData[i]);
                negativesTotal += this.displayData[i].pnl;
            }
        }

        return {
            averageWin: (positivesTotal / positives.length).toFixed(),
            averageLoss: (negativesTotal / negatives.length).toFixed()
        }
    }

    getNumberOfDays() {
        const start = this.data[0].timestamp;
        const end = this.data[this.data.length - 1].timestamp;
        let date1 = new Date(start); 
        let date2 = new Date(end);

        this.startTime = start;
        this.endTime = end;
        
        // To calculate the time difference of two dates 
        let timeRange = date2.getTime() - date1.getTime(); 
        
        // To calculate the no. of days between two dates 
        let dateRange = Math.ceil(timeRange / (1000 * 3600 * 24));

        return dateRange;
    }

    getTimestamps() {
        let timestamps = [];
        for(let i = 0; i < this.data.length; i++) {
            let date = new Date(this.data[i].timestamp);
            timestamps.push(date);
        };

        return timestamps;
    }

    getMultiplier() {
        switch(this.instrument) {
            case 'NQ':
                return 20;
            case 'YM':
                return 5;
            case 'DAX':
                return 25;
            case 'ES':
                return 50;
            case 'NIY':
                return 500;
            default:
                return 1;
        }
    }

}