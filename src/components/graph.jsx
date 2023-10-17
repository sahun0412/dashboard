import { BarChart, Bar, Cell, XAxis, ResponsiveContainer } from "recharts";  // Importing necessary components

import React, { useState, useCallback } from "react";
import "../styles/bar.css";

const data = [  // Data array
  {
    name: "Jan",
    er: 50,
  },
  {
    name: "Feb",
    er: 40,
  },
  {
    name: "Mar",
    er: 100,
  },
  {
    name: "Apr",
    er: 80,
  },
  {
    name: "May",
    er: 90,
  },
  {
    name: "Jun",
    er: 30,
  },
  {
    name: "Jul",
    er: 90,
  },
  {
    name: "Aug",
    er: 100,
  },
  {
    name: "Sep",
    er: 90,
  },
  {
    name: "Oct",
    er: 80,
  },
  {
    name: "Nov",
    er: 70,
  },
  {
    name: "Dec",
    er: 80,
  },
];
const Graph = () => {
  const [activeIndex, setActiveIndex] = useState(0);  // Active index state
  const activeItem = data[activeIndex];

  const handleClick = useCallback(
    (entry: any, index: number) => {  
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  return (
    // Container
    <div className="bar-chart-container pb-5  align-content-center ms-5 ms-lg-2 ms-md-2  mt-2 border-5 border-light bg-light rounded-3">  
      <div>
        <b>Overview</b>
        <p className="text-secondary">Monthly Earning</p> 
      </div>

      <ResponsiveContainer>
        <BarChart className="pb-5" height={400} width={400} data={data}>
        <XAxis dataKey="name"  axisLine={false}/> 
          <Bar radius={5} dataKey="er" onClick={handleClick}>
            {data.map((entry, index) => (
              <Cell
                className="bar ms-3 p-3"
                cursor="pointer"
                fill={index === activeIndex ? "#111150" : "#b7b7ca"}
                key={`cell-${index}`}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
