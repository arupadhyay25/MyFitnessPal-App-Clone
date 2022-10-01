import React from "react";
import { DonutChart } from "react-circle-chart";

const CircleChart = ({ carbs, fat, protein }) => {
  let total = (carbs + fat + protein);
  let cp=Math.floor((carbs/total)*100);
  let fp=Math.floor((fat/total)*100);
  let pp=Math.floor((protein/total)*100);

  let args = [
    {
      value: cp,
      label: "Carbs",
    },
    {
      value: fp,
      label: "Fat",
    },
    {
      value: pp,
      label: "Protein",
    },
  ];
  return (
    <DonutChart
      size="80px"
      totalFontSize="10px"
      displayValue="dfgsdf"
      items={args}
      showTotal={false}
      trackWidth="sm"
      tooltipColor="white"
      roundedCaps={false}
      trackColor="blue"
    />
  );
};

export default CircleChart;
