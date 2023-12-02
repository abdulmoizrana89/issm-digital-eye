import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Box } from "@chakra-ui/react";

interface PieChartData {
  name: string;
  data: Array<{ name: string; y: number; color: string }>;
}

interface PieChartProps {
  data: PieChartData;
}

const PieChartComponent: React.FC<PieChartProps> = ({ data }) => {
  const options: Highcharts.Options = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Production Ratio",
      align: "left",
      x: 10,
    },
    legend: {
      align: "right",
      verticalAlign: "middle",
      layout: "vertical",
      itemStyle: {
        color: "#FFFFFF",
      },
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: false,
          color: "#1b1c1e",
          style: {
            fontWeight: "400",
          },
        },
      },
    },
    series: [data],
  };

  return (
    <Box width="100%" p={4} boxShadow="lg" bg="white">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Box>
  );
};

export default PieChartComponent;
