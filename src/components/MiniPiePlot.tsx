import React from "react";
import Pie from "react-chartjs-2";

const data = {
  // labels: ["aValue", "bValue"],
  datasets: [
    {
      data: [1, 1],
      backgroundColor: ["#4169e1", "#ff1493"],
      hoverBackgroundColor: ["#36a2eb", "#ff6384"],
      borderColor: ["transparent", "transparent"],
    },
  ],
};

const MiniPiePlot: React.FC = () => {
  // data.datasets[0].data = [70, 50];
  return (
    <div>
      <Pie data={data} />
    </div>
  );
};

export default MiniPiePlot;
