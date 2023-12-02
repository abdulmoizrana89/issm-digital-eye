import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Box } from "@chakra-ui/react";

interface SplineChartData {
  name: string;
  data: number[];
}

interface SplineChartProps {
  month: string;
}

const generateData = (length: number) =>
  Array.from({ length }, () => Math.floor(Math.random() * 200) + 50);

const SplineChartComponent: React.FC<SplineChartProps> = ({ month }) => {
  const lineColor = "#F376B6";

  const [chartData, setChartData] = useState<SplineChartData>({
    name: "Line 1",
    data: generateData(30),
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setChartData((prevData) => ({
        ...prevData,
        data: [...prevData.data.slice(1), Math.floor(Math.random() * 200) + 50],
      }));
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const options: Highcharts.Options = {
    chart: {
      type: "spline",
    },
    title: {
      text: "Monthly Production per Line",
      align: "left",
      x: 5,
    },
    subtitle: {
      text: month,
      align: "left",
      x: 5,
    },
    xAxis: {
      categories: Array.from(
        { length: chartData.data.length },
        (_, i) => `${i + 1}`
      ),
      labels: {
        style: {
          color: "#A3A3A3",
        },
      },
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

    plotOptions: {
      spline: {
        marker: {
          enabled: true,
          fillColor: lineColor,
          lineColor: "white",
          lineWidth: 2,
        },
        lineWidth: 3,
        states: {
          hover: {
            lineWidth: 3,
          },
        },
        color: lineColor,
      },
    },
    series: [chartData],
  };

  return (
    <Box width="100%" p={4} boxShadow="lg" bg="white">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Box>
  );
};

export default SplineChartComponent;
