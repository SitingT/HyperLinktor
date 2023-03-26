import React from "react";
import { Line } from "react-chartjs-2";
import useReadCSV from "./readCSV";
import type { ChartData, ChartOptions } from "chart.js";
import "chartjs-adapter-date-fns"; // Import the date adapter

const LineChart = () => {
  const data = useReadCSV();

  if (!data) {
    return <div>Loading...</div>;
  }

  const labels = data.data.map((d) => d.Date);
  const spReturnData = data.data.map((d) => d.sp_return);
  const strategyData = data.data.map((d) => d.strategy);

  const chartData: ChartData<"line"> = {
    labels: labels,
    datasets: [
      {
        label: "S&P 500 Return",
        data: spReturnData,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        label: "Strategy Return",
        data: strategyData,
        fill: false,
        borderColor: "rgba(255, 99, 132, 1)",
        tension: 0.1,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "time", // Use the "time" scale type for dates
        adapters: {
          date: {
            locale: "en-US",
          },
        },
        time: {
          unit: "day", // Set the appropriate time unit
          displayFormats: {
            day: "MMM DD, YYYY", // Customize the date format
          },
        },
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Return",
        },
      },
    },
  };

  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
