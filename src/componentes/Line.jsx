
import {  ChartsLegend, ChartsTooltip, ChartsXAxis, ChartsYAxis, LinePlot, ResponsiveChartContainer } from "@mui/x-charts";


export default function Line({height}) {
  return (
    <ResponsiveChartContainer
      series={[
        {
          type: "line",
          data: [4000, 3000, 2000, 2780],
        },
        {
          type: "line",
          data: [2400, 1398, 9800, 3908],
        },
      ]}
      xAxis={[
        {
          data: ["Egypt", "UAE", "Morocco", "SAUDIA"],
          scaleType: "band",
          id: "x-axis-id",
        },
      ]}
      yAxis={[
        {
          scaleType: "linear",
          id: "y-axis-id",
        },
      ]}
      height={height || 500}
    >

     
      <LinePlot />
      <ChartsTooltip/>
      <ChartsLegend position={{vertical:"middle", horizontal:'right'}}/>

      <ChartsXAxis label="Country" position="bottom" axisId="x-axis-id" />
      <ChartsYAxis label="Value" position="left" axisId="y-axis-id"/>

    </ResponsiveChartContainer>
  );
}
