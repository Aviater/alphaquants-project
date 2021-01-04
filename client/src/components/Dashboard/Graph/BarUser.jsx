import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import PerformanceTotal from './PerformanceTotal';
import PerformanceLastMonth from './PerformanceLastMonth';
import PerformanceCurrentMonth from './PerformanceCurrentMonth';

const BarUser = (props) => {
	return (
        <div className="panel-wrapper collapse in">
            <div className="panel-body">
                <ul className="flex-stat flex-stat-2 mt-20">

                    <PerformanceTotal {...props}/>
                    <PerformanceLastMonth {...props}/>
                    <PerformanceCurrentMonth {...props}/>

                </ul>
                <div className="mixed-chart">
                    <div className="mixed-chart">
                    <ResponsiveContainer>
                    <BarChart
                        data={props.data.graphData}
                        margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={props.xAxis} />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey={props.dataKey.bar} fill="#8d62cd" />
                    </BarChart>
                    </ResponsiveContainer>
                </div>
                </div>
            </div>
        </div>
	)  
}

export default BarUser;