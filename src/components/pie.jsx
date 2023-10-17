import React from "react";
import { PieChart, Pie, Cell, Sector } from "recharts";
import "../styles/pie.css";
const data01 = [
  { name: "Group A", value: 60, fill: "#E0115F" },
  { name: "Group B", value: 10, fill: "#979699" },
  { name: "Group C", value: 30, fill: "#3F08AD" }
];

const MyChart = () => {
  return (
    <div className="pie-chart border-5 ms-lg-2 ms-5 ms-md-2 mt-4 border-light bg-light rounded-3 p-2" >
      <div>
        <p className="fw-bold">Customers</p>
        <p className="text-secondary">Customers that buy products</p>
      </div>
      <PieChart width={300} height={300}>
        <Pie
          data={data01}
          dataKey="value"
          cx={100}
          cy={100}
          innerRadius={50}
          outerRadius={80}
          paddingAngle={5}
          startAngle={90}
          endAngle={-270}
        >
          {data01.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Pie>
        <text
          x={100}
          y={100}
          textAnchor="middle"
          dominantBaseline="middle"
          className="center-label"
        >
          <tspan x="100" dy="0" className="fw-bold" fontSize="14">
            65%
          </tspan> 
          <tspan x="100" dy="18" className="fw-bold" fontSize="12">
            Total New  
          </tspan>
          <tspan x="100" dy="18" className="fw-bold" fontSize="12">
            Customers
          </tspan>
        </text>
      </PieChart>
    </div>
  );
};

export default MyChart;
