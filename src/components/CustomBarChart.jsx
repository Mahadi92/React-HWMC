import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '05/13',
    uv: 4000,
    BTC: 0.05776508,
    amt: 2400,
  },
  {
    name: '05/14',
    uv: 3000,
    BTC: 0.06798416,
    amt: 2210,
  },
  {
    name: '05/15',
    uv: 2000,
    BTC: 0.07831571,
    amt: 2290,
  },
  {
    name: '05/16',
    uv: 2780,
    BTC: 0.08854545,
    amt: 2000,
  },
  {
    name: '05/17',
    uv: 2780,
    BTC: 0.09868377,
    amt: 2000,
  },
  {
    name: '05/18',
    uv: 1890,
    BTC: 0.11173344,
    amt: 2181,
  },
  {
    name: '05/19',
    uv: 2390,
    BTC: 0.12627055,
    amt: 2500,
  },
  {
    name: '05/20',
    uv: 3490,
    BTC: 0.14086692,
    amt: 2100,
  },
  {
    name: '05/21',
    uv: 3490,
    BTC: 0.15548933,
    amt: 2100,
  },
  {
    name: '05/22',
    uv: 3490,
    BTC: 0.16828953,
    amt: 2100,
  },
  {
    name: '05/23',
    uv: 3490,
    BTC: 0.18281714,
    amt: 2100,
  },
  {
    name: '05/24',
    uv: 3490,
    BTC: 0.19731096,
    amt: 2100,
  },
  {
    name: '05/25',
    uv: 3490,
    BTC: 0.21189697,
    amt: 2100,
  },
  {
    name: '05/26',
    uv: 3490,
    BTC: 0.2290367,
    amt: 2100,
  },
  {
    name: '05/27',
    uv: 3490,
    BTC: 0.24896194,
    amt: 2100,
  },
  {
    name: '05/28',
    uv: 3490,
    BTC: 0.26892106,
    amt: 2100,
  },
  {
    name: '05/29',
    uv: 3490,
    BTC: 0.28876013,
    amt: 2100,
  },
  {
    name: '05/30',
    uv: 3490,
    BTC: 0.30842143,
    amt: 2100,
  },
  {
    name: '05/31',
    uv: 3490,
    BTC: 0.32822868,
    amt: 2100,
  },
  {
    name: '06/01',
    uv: 3490,
    BTC: 0.34804453,
    amt: 2100,
  },
  {
    name: '06/02',
    uv: 3490,
    BTC: 0.36795817,
    amt: 2100,
  },
  {
    name: '06/03',
    uv: 3490,
    BTC: 0.38795918,
    amt: 2100,
  },
  {
    name: '06/04',
    uv: 3490,
    BTC: 0.40781566,
    amt: 2100,
  },
  {
    name: '06/05',
    uv: 3490,
    BTC: 0.42749679,
    amt: 2100,
  },
  {
    name: '06/06',
    uv: 3490,
    BTC: 0.44676425,
    amt: 2100,
  },
  {
    name: '06/07',
    uv: 3490,
    BTC: 0.46633164,
    amt: 2100,
  },
  {
    name: '06/08',
    uv: 3490,
    BTC: 0.485432,
    amt: 2100,
  },
];

const GradientColors = () => {
  return (
    <linearGradient id="barColorView" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#E323FF" stopOpacity={1} />
      <stop offset="95%" stopColor="#7517F8" stopOpacity={1} />
    </linearGradient>
  );
};
const GradientColors2 = () => {
  return (
    <linearGradient id="barColorView2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#FFD422" stopOpacity={1} />
      <stop offset="95%" stopColor="#FF7D05" stopOpacity={1} />
    </linearGradient>
  );
};

const CustomBarChart = () => {

  return (
    <div className=" w-full h-96 bg-bg rounded-lg py-4 sm:py-8 custom-bar-chart">
      <div>
        <h2 className="text-white font-semibold text-2xl pl-4 sm:pl-8 m-0 font-neuePlak">BTC Minned</h2>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={600}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          stackOffset="none"
        >
          {/* <Tooltip
            itemStyle={{ color: "#fff", backgroundColor: "#0A1322", borderRadius: "10px" }}
            contentStyle={{ backgroundColor: "#0A1322" }}
          /> */}
          <defs>
            <GradientColors />
          </defs>
          <defs>
            <GradientColors2 />
          </defs>
          <Legend verticalAlign="top" align="right" wrapperStyle={{ top: "-30px", color: "#fff", borderRadius: "9999px" }} />
        {/*   <CartesianGrid strokeDasharray="0 1 3" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{background: "#0b0d12", border: "0.5px solid #767676", borderRadius: "10px"}} cursor={{ fill: 'rgba(245, 238, 254, 0.233)' }} />
          <Bar dataKey="BTC" stackId="a" background={{ fill: '#00000021' }} barSize={10} fill="url(#barColorView)"
            radius={[10, 10, 10, 10]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

}
export default CustomBarChart;