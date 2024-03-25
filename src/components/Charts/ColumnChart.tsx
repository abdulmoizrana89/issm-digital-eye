// ColumnChartComponent.tsx

import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Box } from "@chakra-ui/react";

interface ColumnChartData {
  name: string;
  data: number[];
}

interface ColumnChartProps {
  month: string;
  data: ColumnChartData[];
}

const ColumnChartComponent: React.FC<ColumnChartProps> = ({
  month,
  data,
  name,
}) => {
  const options: Highcharts.Options = {
    chart: {
      type: "column",
    },
    title: {
      text: name,
      align: "left",
      x: 5,
    },
    subtitle: {
      text: month,
      align: "left",
      x: 5,
    },
    xAxis: {
      type: "category",
      labels: {
        style: {
          color: "#A3A3A3",
        },
      },
      categories: Array.from({ length: data[0].data.length }, (_, i) =>
        (i + 1).toString()
      ),
    },
    yAxis: {
      title: {
        text: "Quantity",
        style: {
          color: "#A3A3A3",
        },
      },
      labels: {
        style: {
          color: "#A3A3A3",
        },
      },
    },
    legend: {
      title: {
        text: `September, 2023`,
        style: {
          color: "#A3A3A3",
          fontWeight: 300,
          fontSize: "20px",
        },
      },
      enabled: true,
    },
    series: data,
  };

  return (
    <Box width="100%" p={4} boxShadow="lg" bg="white">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Box>
  );
};

export default ColumnChartComponent;
