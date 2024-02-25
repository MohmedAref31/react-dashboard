import { Box, Typography, useTheme } from '@mui/material'

export default function SectionHeader({title, text}) {
    const theme = useTheme()
  return (
    <Box mb={2}>
    <Typography variant="h4" textTransform={'capitalize'} fontWeight={'bold'} color={theme.palette.primary.main}>
      {title}
    </Typography>
    <Typography textTransform={"capitalize"} fontSize={'normal'} fontWeight={'bold'} color={"#777"} ml={0}>
      {text}
    </Typography>
  </Box>
  )
}
