// PackageTypeBreakdownChart.tsx

import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Box } from "@chakra-ui/react";

interface ColumnChartData {
  name: string;
  data: number[];
}

interface ColumnChartProps {
  data: ColumnChartData[];
}

const PackageTypeBreakdownChart: React.FC<ColumnChartProps> = ({
  data,
  name,
}) => {
  const options: Highcharts.Options = {
    chart: {
      type: "column",
    },
    title: {
      text: name,
    },
    xAxis: {
      categories: [""],
      visible: false,
    },
    yAxis: {
      max: 100,
      title: {
        text: "Percentage",
        style: {
          color: "#A3A3A3",
        },
      },
      labels: {
        format: "{value}%",
        style: {
          color: "#A3A3A3",
        },
      },
      tickPositions: [0, 50, 100],
    },
    legend: {
      title: {
        text: `September, 2023`,
        style: {
          color: "#A3A3A3",
          fontSize: "20px",
        },
      },
      enabled: true,
    },
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true,
          format: "{point.y}%",
        },
      },
    },
    series: data,
  };

  return (
    <Box width="100%" p={4} boxShadow="lg" bg="white">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Box>
  );
};

export default PackageTypeBreakdownChart;
