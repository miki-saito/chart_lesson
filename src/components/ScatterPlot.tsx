import React from "react";
import { Scatter } from "react-chartjs-2";

const data = {
  datasets: [
    {
      label: "group1",
      borderColor: "#008b8b",
      showLine: true,
      fill: false,
      pointBorderWidth: 10,
      pointRadius: 1,
      data: [
        { x: 21, y: 181 },
        { x: 25, y: 124 },
        { x: 20, y: 130 },
        { x: 30, y: 101 },
        { x: 28, y: 137 },
        { x: 25, y: 132 },
        { x: 22, y: 152 },
        { x: 20, y: 137 },
        { x: 24, y: 134 },
      ],
    },
    {
      label: "group2",
      borderColor: "#ff1493",
      showLine: true,
      fill: false,
      pointBorderWidth: 10,
      pointRadius: 1,
      data: [
        { x: 1, y: 41 },
        { x: 7, y: 21 },
        { x: 0, y: 10 },
        { x: 10, y: 96 },
        { x: 3, y: 13 },
        { x: 4, y: 89 },
        { x: 5, y: 24 },
        { x: 5, y: 37 },
        { x: 15, y: 51 },
      ],
    },
    {
      label: "group3",
      borderColor: "#4169e1",
      showLine: true,
      fill: false,
      pointBorderWidth: 10,
      pointRadius: 1,
      data: [
        { x: 5, y: 242 },
        { x: 6, y: 249 },
        { x: 7, y: 240 },
        { x: 8, y: 248 },
        { x: 9, y: 200 },
        { x: 22, y: 245 },
        { x: 7, y: 195 },
        { x: 9, y: 250 },
        { x: 10, y: 205 },
      ],
    },
  ],
};

const options = {
  title: {
    display: true,
    fontSize: 18,
    text: "Scatter test",
  },
  scales: {
    yAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: "Number",
          fontSize: 18,
        },

        ticks: {
          min: 0,
          max: 300,
          fontSize: 14,
        },
      },
    ],

    xAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: "Cost",
          fontSize: 18,
        },

        ticks: {
          min: 0,
          max: 30,
          fontSize: 14,
        },
      },
    ],
  },
};

// const plotData = {
//   group1: [
//     { x: 1, y: 81 },
//     { x: 1, y: 124 },
//     { x: 2, y: 130 },
//     { x: 2, y: 101 },
//     { x: 3, y: 137 },
//     { x: 3, y: 132 },
//     { x: 3, y: 152 },
//     { x: 4, y: 137 },
//     { x: 5, y: 134 },
//   ],
//   group2: [
//     { x: 1, y: 41 },
//     { x: 1, y: 121 },
//     { x: 1, y: 100 },
//     { x: 2, y: 96 },
//     { x: 3, y: 113 },
//     { x: 4, y: 89 },
//     { x: 5, y: 124 },
//     { x: 5, y: 137 },
//     { x: 5, y: 151 },
//   ],
//   group3: [
//     { x: 5, y: 142 },
//     { x: 6, y: 149 },
//     { x: 7, y: 152 },
//     { x: 8, y: 158 },
//     { x: 9, y: 155 },
//     { x: 10, y: 166 },
//     { x: 7, y: 122 },
//     { x: 9, y: 149 },
//     { x: 10, y: 205 },
//   ],
// };

const ScatterPlot: React.FC = () => {
  return (
    <div>
      <Scatter data={data} options={options} />
    </div>
  );
};

export default ScatterPlot;
