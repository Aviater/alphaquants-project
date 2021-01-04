import React from 'react';
import { Chart as GoogleChart} from 'react-google-charts';

const CandlestickChart = (props) => {

    const graphLoader = () => {
        if(typeof props.displayData === 'string') {
            return  <div className="back-test-graph-loader">
                        <h4>Loading graph...</h4>
                    </div>
        } else {
            return <GoogleChart
                        key={props.displayData.length}
                        width={'100%'}
                        height={'calc(95vmin - 120px)'}
                        chartType="ComboChart"
                        loader={<div>Loading Chart</div>}
                        data={props.displayData}
                        options={{
                            seriesType: 'candlesticks',
                            legend: 'none',
                            animation: {
                                startup: true,
                                easing: 'inAndOut',
                                duration: 500,
                            },
                            candlestick: {
                                fallingColor: { strokeWidth: 0, fill: '#a52714'}, // red
                                risingColor: { strokeWidth: 0, fill: '#0f9d58'}, // green
                            },
                            colors: ['gray'],
                            series: { 
                                1: { 
                                    type: 'line',
                                    color: '#0f9d58'
                                },
                                2: { 
                                    type: 'line',
                                    color: 'orange'
                                },
                                3: { 
                                    type: 'line',
                                    color: 'a52714'
                                },
                            },
                        }}
                        rootProps={{ 'data-testid': '1' }}
                    /> 
        }
    }

	return (
        <div className="panel-wrapper collapse in">
            <div className="panel-body">
                <div className="row">
                    <div className="col-sm-10">
                        {graphLoader()}
                    </div>
                    <div className="col-sm-2">
                    </div>
                </div>
                
            </div>
        </div>
	)  
}

export default CandlestickChart;