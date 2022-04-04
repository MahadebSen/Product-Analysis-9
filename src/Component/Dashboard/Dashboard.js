import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';


const Dashboard = () => {
    const [charts, setCharts] = useState([]);

    useEffect( ()=> {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCharts(data))
    } , []);
    
    return (
        <div>
            <div>
                <p className=' font-semibold text-2xl m-8'>Month wise sale</p>
                <LineChart width={450} height={250} data={charts} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <Line type="monotone" dataKey={'sale'} stroke="#8884d8" />
                    <CartesianGrid strokeDasharray="3 3" stroke="black" />
                    <XAxis dataKey={"month"} />
                    <YAxis />
                    <Tooltip />
                 </LineChart>
            </div>
            <div>
                <p className=' font-semibold text-2xl m-8 pb-8'>Investment vs Revenue</p>
                <BarChart width={450} height={250} data={charts}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="investment" fill="#8884d8" />
                <Bar dataKey="revenue" fill="#82ca9d" />
                </BarChart>
            </div>
            <div>
                <p className=' font-semibold text-2xl m-8'>Investment vs Revenue</p>
                <AreaChart width={450} height={250} data={charts}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </div>

        </div>
    );
};

export default Dashboard;