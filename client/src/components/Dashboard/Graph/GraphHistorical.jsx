import React from 'react';
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import PerformanceTotal from './PerformanceTotal';
import PerformanceLastMonth from './PerformanceLastMonth';
import PerformanceCurrentMonth from './PerformanceCurrentMonth';

const GraphHistorical = (props) => {

	return (
        <div className="panel-wrapper collapse in">
            <div className="panel-body">
                <ul className="flex-stat flex-stat-2 mt-20">

                    <PerformanceTotal {...props}/>
                    <PerformanceLastMonth {...props}/>
                    <PerformanceCurrentMonth {...props}/>

                </ul>
                <div className="mixed-chart">
                    <ResponsiveContainer>
                        <ComposedChart

                            data={props.data.graphData}
                            margin={{
                                top: 5, right: 30, left: 0, bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey={props.xAxis} />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey={props.dataKey.line} stroke="#82ca9d" dot={false} activeDot={{ r: 5 }} />
                            <Bar dataKey={props.dataKey.bar} barSize={20} fill="#8d62cd" />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
	)  
}

export default GraphHistorical;