// src/App.js
import React, { useState } from 'react';
import ChartComponent from './Chart';

const App = () => {
  const [chartType, setChartType] = useState('line');

  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    values: [10, 25, 15, 30, 20],
  };

  return (
    <div>
      <h1>Analytics Dashboard</h1>
      <div>
        <label>
          Chart Type:{' '}
          <select value={chartType} onChange={(e) => setChartType(e.target.value)}>
            <option value="line">Line Chart</option>
            <option value="bar">Bar Chart</option>
          </select>
        </label>
      </div>
      <ChartComponent data={chartData} type={chartType} />
    </div>
  );
};

export default App;
