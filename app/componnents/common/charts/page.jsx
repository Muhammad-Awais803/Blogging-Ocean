"use client"
import React from 'react';
import Chart from 'react-apexcharts'
const ChartComponent = () => {
  const [options, setOptions] = React.useState({
    chart: {
      id: 'basic-bar'
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
  });

  const [series, setSeries] = React.useState([
    {
      name: 'Series 1',
      data: [30, 40, 45, 50, 49, 60, 70, 91, 125, 100, 95, 110]
    }
  ]);

  return (
    <div className="chart ">
      <Chart options={options} series={series} type="bar" width="100%" />
    </div>
  );
}

export default ChartComponent;
