import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { dataSets } from "./util";
import numeral from "numeral";

function Chart({ data }) {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const chart = () => {
      const label = data.map((item) =>
        new Date(item.date).toDateString().substring(4, 10)
      );
      const numberOfCases = data.map((item) => item.confirmed);
      const numberOfDeaths = data.map((item) => item.deaths);
      let numberOfRecoveries;
      if (data[0].hasOwnProperty("recovered")) {
        numberOfRecoveries = data.map((item) => item.recovered);
      }
      let chartData = dataSets(
        numberOfCases,
        numberOfRecoveries,
        numberOfDeaths
      );

      setChartData({
        labels: label,
        datasets: chartData,
      });
    };
    chart();
  }, [data]);

  return (
    <div className="chart-container">
      <Line
        data={chartData}
        options={{
          responsive: true,
          title: { text: "NUMBER OF CASES", display: true },
          scales: {
            yAxes: [
              {
                ticks: {
                  callback: function (value) {
                    return numeral(value).format("0 a");
                  },
                  autoSkip: true,
                  beginAtZero: false,
                },
                gridLines: {
                  display: false,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
}

export default Chart;
