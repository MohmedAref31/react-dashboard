import { Box, Button, Paper, Stack, Typography, useTheme } from "@mui/material";
import SectionHeader from "../componentes/SectionHeader";
import {
  DownloadOutlined,
  Mail,
  Person,
  PersonAdd,
  Traffic,
} from "@mui/icons-material";
import Pie from "../componentes/Pie";
import Line from "../componentes/Line";
import Bar from "../componentes/Bar";

export default function Home() {
  const theme = useTheme();
  const cardsContent = [
    {
      icon: <Mail color={theme.palette.secondary.main} />,
      value: 3000,
      title: "sent emails",
      percent: 20,
    },
    {
      icon: <Person color={theme.palette.secondary.main} />,
      value: 25000,
      title: "active users",
      percent: 20,
    },
    {
      icon: <PersonAdd color={theme.palette.secondary.main} />,
      value: 50000,
      title: "new users",
      percent: 10,
    },
    {
      icon: <Traffic color={theme.palette.secondary.main} />,
      value: 100000,
      title: "traffic recieved",
      percent: 40,
    },
  ];

  return (
    <Box>
      <SectionHeader title={"dashboard"} text={"welcom to your dashboard"} />

      <Box sx={{ textAlign: "right" }}>
        <Button
          variant="contained"
          sx={{ textTransform: "capitalize", fontWeight: "bold" }}
        >
          <DownloadOutlined sx={{ mr: 1 }} />
          download reports
        </Button>
      </Box>

      <Stack gap={2} direction={{ xs: "column", sm: "row" }} flexWrap={"wrap"}>
        {cardsContent.map((item) => {
          return (
            <StaticsCard
              icon={item.icon}
              value={item.value}
              title={item.title}
              percent={item.percent}
              key={item.title}
            />
          );
        })}
      </Stack>

      <Stack marginY={2} gap={2} direction={{ xs: "column", md: "row" }}>
        <LineChart color={theme.palette.secondary.main} />
        <Transactions
          color={theme.palette.secondary.main}
          background={theme.palette.background.paper}
        />
      </Stack>
      <Stack marginY={2} gap={2} direction={{ xs: "column", md: "row" }}>
        <BarChart color={theme.palette.secondary.main} />
        <PieChart color={theme.palette.secondary.main}/>
      </Stack>
    </Box>
  );
}

const StaticsCard = ({ icon, value, title, percent }) => {
  return (
    <Paper
      sx={{
        p: 1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexGrow: "1",
      }}
    >
      <Stack gap={0.5} textTransform={"capitalize"}>
        {icon}
        <Typography>{value}</Typography>
        <Typography>{title}</Typography>
      </Stack>

      <Stack alignItems={"center"} justifyContent={"space-between"} gap={0.5}>
        <Box maxWidth={200} width={90} mt={"-20px"}>
          <Pie
            label={false}
            legend={false}
            innerRadius={30}
            outerRadius={20}
            height={80}
          />
        </Box>

        <Typography>+{percent}%</Typography>
      </Stack>
    </Paper>
  );
};

const PieChart = (color) => {
  return (
    <Paper sx={{ p: 2, flexGrow: 1 }}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography
          variant="h3"
          fontSize={"20px"}
          textTransform={"capitalize"}
          fontWeight={"bold"}
          color={color}
        >
          statics
        </Typography>
      </Stack>
      <Pie
            label={true}
            legend={false}
            innerRadius={150}
            outerRadius={120}
            height={300}
          />
    </Paper>
  );
};
const BarChart = (color) => {
  return (
    <Paper sx={{ p: 2, flexGrow: 1 }}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography
          variant="h3"
          fontSize={"20px"}
          textTransform={"capitalize"}
          fontWeight={"bold"}
          color={color}
        >
          statics
        </Typography>
      </Stack>
      <Bar height={300} />
    </Paper>
  );
};
const LineChart = (color) => {
  return (
    <Paper sx={{ p: 2, flexGrow: 2 }}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography
          variant="h3"
          fontSize={"20px"}
          textTransform={"capitalize"}
          fontWeight={"bold"}
          color={color}
        >
          revenue gauranted
        </Typography>
        <DownloadOutlined />
      </Stack>
      <Line height={300} />
    </Paper>
  );
};

const Transactions = ({ color, background }) => {
  const transactions = [
    {
      text1: "dfaadfsdfa",
      text2: "tv 60 inche",
      date: "07-10-2023",
      amount: 40,
    },
    {
      text1: "dfaadfsdfa",
      text2: "tv 60 inche",
      date: "07-10-2023",
      amount: 40,
    },
    {
      text1: "dfaadfsdfa",
      text2: "tv 60 inche",
      date: "07-10-2023",
      amount: 40,
    },
    {
      text1: "dfaadfsdfa",
      text2: "tv 60 inche",
      date: "07-10-2023",
      amount: 40,
    },
    {
      text1: "dfaadfsdfa",
      text2: "tv 60 inche",
      date: "07-10-2023",
      amount: 40,
    },
    {
      text1: "dfaadfsdfa",
      text2: "tv 60 inche",
      date: "07-10-2023",
      amount: 40,
    },
  ];
  return (
    <Paper sx={{ p: 2, flexGrow: 1, backgroundColor: "none" }}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography
          variant="h3"
          fontSize={"20px"}
          textTransform={"capitalize"}
          fontWeight={"bold"}
          color={color}
          mb={1}
        >
          latest Transactions
        </Typography>
      </Stack>
      <Box display={"flex"} flexDirection={"column"} gap={1} maxHeight={300} overflow={'auto'}>
        {transactions.map((item) => (
          <Stack
            key={item.text1}
            gap={2}
            sx={{ background: background }}
            p={1}
            justifyContent={'space-between'}
            alignItems={"center"}
            direction={'row'}
          >
            <Box>
              <Typography
                component={"p"}
                textTransform={"capitalize"}
                fontWeight={"bold"}
              >
                {item.text1}
              </Typography>
              <Typography
                component={"p"}
                textTransform={"capitalize"}
                fontSize={"small"}
              >
                {item.text2}
              </Typography>
            </Box>
            <Typography>{item.date}</Typography>
            <Typography sx={{background:color, px:1, borderRadius:1}}>{item.amount}$</Typography>
          </Stack>
        ))}
      </Box>
    </Paper>
  );
};
