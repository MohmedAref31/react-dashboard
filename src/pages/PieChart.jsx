import { Box } from "@mui/material";
import SectionHeader from "../componentes/SectionHeader";
import Pie from "../componentes/Pie";



export default function PieChart() {
  return (
    <Box>
      <SectionHeader title={"Pie chart"}/>
      <Pie label={true} legend={true} innerRadius={0}  height={500}/>
    </Box>
  )
}
