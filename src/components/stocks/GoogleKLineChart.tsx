import React, { useState, useEffect } from "react";
import axios from "axios";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

import HC_sma from "highcharts/indicators/indicators";
import HC_exporting from "highcharts/modules/exporting";
import HC_exportData from "highcharts/modules/export-data";
import HC_annotations from "highcharts/modules/annotations";

HC_sma(Highcharts);
HC_exporting(Highcharts);
HC_exportData(Highcharts);
HC_annotations(Highcharts);

interface StockDataPoint {
  date: number;
  open: number;
  high: number;
  low: number;
  close: number;
}

interface DailyStockData {
  "1. open": string;
  "2. high": string;
  "3. low": string;
  "4. close": string;
}

const GoogleKLineChart: React.FC = () => {
  const [stockData, setStockData] = useState<StockDataPoint[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=GOOGL&apikey=1Z0LHLYU8P8X965L"
        );
        const rawData = response.data["Time Series (Daily)"];
        const data = Object.entries(rawData)
          .map(([date, values]) => {
            const dailyData = values as DailyStockData;
            const [year, month, day] = date.split("-");
            return {
              date: Date.UTC(Number(year), Number(month) - 1, Number(day)),
              open: Number(dailyData["1. open"]),
              high: Number(dailyData["2. high"]),
              low: Number(dailyData["3. low"]),
              close: Number(dailyData["4. close"]),
            };
          })
          .slice(-90);

        setStockData(data);
        setIsLoading(false);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError("An error occurred while fetching data.");
        }
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const chartOptions: Highcharts.Options = {
    chart: {
      backgroundColor: "#000000",
      width: 900,
      height: 500,
    },
    title: {
      text: "Google Stock Price",
      style: {
        color: "#FFFFFF",
        fontSize: "24px",
        fontWeight: "bold",
        fontFamily: "Arial",
      },
    },
    series: [
      {
        type: "candlestick",
        name: "GOOGL",
        data: stockData,
        color: "#FF0000",
        upColor: "#00FF00", // lighter green color for up days
      },
      {
        type: "sma",
        name: "MA50",
        linkedTo: "GOOGL",
        params: {
          period: 50,
          index: 3,
        },
        color: "#FFA500",
      },
    ],
    xAxis: {
      categories: stockData.map((d) =>
        new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "short",
          day: "2-digit",
        }).format(new Date(d.date))
      ),
      gridLineColor: "#444444", // darker gray grid lines
      gridLineWidth: 1,
      labels: {
        style: {
          color: "#FFFFFF",
          fontSize: "12px",
          fontFamily: "Arial",
        },
      },
    },
    yAxis: [
      {
        title: {
          text: "Price",
          style: {
            color: "#FFFFFF",
            fontSize: "16px",
            fontWeight: "bold",
            fontFamily: "Arial",
          },
        },
        height: "70%",
        gridLineColor: "#444444", // darker gray grid lines
        gridLineWidth: 1,
        labels: {
          style: {
            color: "#FFFFFF",
            fontSize: "14px",
            fontFamily: "Arial",
          },
        },
      },
      {
        title: {
          text: "Volume",
          style: {
            color: "#FFFFFF",
            fontSize: "16px",
            fontWeight: "bold",
            fontFamily: "Arial",
          },
        },
        top: "75%",
        height: "25%",
        offset: 0,
        gridLineColor: "#444444", // darker gray grid lines
        gridLineWidth: 1,
        labels: {
          style: {
            color: "#FFFFFF",
            fontSize: "14px",
            fontFamily: "Arial",
          },
        },
      },
    ],
    tooltip: {
      split: true,
      style: {
        fontSize: "14px",
        fontWeight: "bold",
        fontFamily: "Arial",
      },
    },
    plotOptions: {
      candlestick: {
        color: "#FF0000",
        upColor: "#00FF00",
      },
    },
    legend: {
      enabled: true,
      align: "right",
      verticalAlign: "middle",
      layout: "vertical",
      itemStyle: {
        color: "#FFFFFF",
        fontSize: "12px",
        fontWeight: "bold",
        fontFamily: "Arial",
      },
    },
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="googleKLineChart">
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
    </div>
  );
};

export default GoogleKLineChart;
