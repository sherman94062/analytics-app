// src/Chart.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import 'chart.js/auto' for dynamic import

const ChartComponent = ({ data, type }) => {
  const chartRef = useRef();
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(ctx, {
      type: type,
      data: {
        labels: data.labels,
        datasets: [
          {
            label: 'Analytics Data',
            data: data.values,
            borderColor: type === 'line' ? 'rgba(75, 192, 192, 1)' : 'rgba(255, 99, 132, 1)',
            backgroundColor: type === 'bar' ? 'rgba(255, 99, 132, 0.2)' : 'transparent',
            borderWidth: 2,
            fill: type === 'line' ? false : true,
          },
        ],
      },
    });
  }, [data, type]);

  return <canvas ref={chartRef} />;
};

export default ChartComponent;