// React Peer Dependencies
import React from "react";
// SVG-charts
import { PieChart as SVGPieChart } from "react-native-svg-charts";
// Types And Interfaces
type PieChartProps = {
  data: number[];
  onPressHandlersArray?: (() => void)[];
};
const PieChart = ({ data, onPressHandlersArray }: PieChartProps) => {
  const randomColor = () =>
    ("#" + ((Math.random() * 0xffffff) << 0).toString(16) + "000000").slice(
      0,
      7
    );

  const pieData = data
    .filter((value) => value > 0)
    .map((value, index) => ({
      value,
      svg: {
        fill: randomColor(),
        onPress: onPressHandlersArray?.[index],
      },
      key: `pie-${index}`,
    }));

  return <SVGPieChart style={{ height: 200 }} data={pieData} />;
};

export default PieChart;
export type { PieChartProps };
