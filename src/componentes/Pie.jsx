import {
  PiePlot,
  ResponsiveChartContainer,
  ChartsTooltip,
  ChartsLegend,
} from "@mui/x-charts";

export default function Pie({ innerRadius, label, legend, height, outerRadius }) {
  return (
    <ResponsiveChartContainer
      series={[
        {
          type: "pie",
          data: [
            { id:0,label: "Egypt", value: 4000 },
            { label: "UAE", value: 3000 },
            { label: "Morocco", value: 2000 },
            { label: "SAUDIA", value: 2780 },
          ],
          innerRadius: innerRadius || 0,
          arcLabel: label && "formattedValue",
          cornerRadius: 2,
          highlightScope: { faded: "global", highlighted: "item" },
          faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
          outerRadius 
        },
      ]}
      height={height || 500}
    >
      <PiePlot dataKey="value" />
      {legend && <ChartsLegend />}
      <ChartsTooltip />
    </ResponsiveChartContainer>
  );
}
