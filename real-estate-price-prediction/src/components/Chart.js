import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Chart = ({ predictedPrice }) => {
  const data = {
    labels: ["Prediction"],
    datasets: [
      {
        label: "Predicted Price",
        data: [predictedPrice || 0],
        borderColor: "#4caf50",
        backgroundColor: "#81c784",
        fill: false,
      },
    ],
  };

  useEffect(() => {}, [predictedPrice]);

  return (
    <div className="chart-container" style={{ maxWidth: "600px", width: "100%" }}>
      <Line data={data} />
    </div>
  );
};

export default Chart;
