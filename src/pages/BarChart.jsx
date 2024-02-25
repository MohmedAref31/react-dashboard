import { Box } from "@mui/material";
import Bar from "../componentes/Bar";
import SectionHeader from "../componentes/SectionHeader";

export default function BarChart() {
  return (
    <Box>
      <SectionHeader title={"bar chart"} text={"this is statics"}/>
      <Bar/>
    </Box>
    
  )
}
