import React from 'react'

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';


const ScatterChartComponent = ({ data }) => {



  const graphData = data.coordinates.map((item) => {
    return {
      x: item[0],
      y: item[1]
    }
  })

  console.log(graphData)

  return (
    <div className='chart-container'>
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart
          width={500}
          height={400}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="X" min={100} />
          <YAxis type="number" dataKey="y" name="Y" min={100} />
          <ZAxis type="number" range={[100]} />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <Scatter name="Randomly Generated Cities" data={graphData} fill="red" shape="dot" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ScatterChartComponent