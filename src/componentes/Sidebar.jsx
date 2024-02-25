/* eslint-disable react/prop-types */
import {
  Avatar,
  Box,
  Tooltip,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { grey } from "@mui/material/colors";
import MuiDrawer from "@mui/material/Drawer";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ContactPageOutlined,
  GroupOutlined,
  LeaderboardOutlined,
  PersonOutlined,
  PieChartOutline,
  ShowChart,
} from "@mui/icons-material";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function Sidebar({ open, handleDrawerClose }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const list1 = [
    { text: "dashboard", icon: <HomeOutlinedIcon />, to: "/" },
    { text: "team", icon: <GroupOutlined />, to: "/team" },
    { text: "contacts", icon: <ContactPageOutlined />, to: "/contacts" },
  ];
  const list2 = [
    { text: "create user", icon: <PersonOutlined />, to: "/create-user" },
  ];
  const list3 = [
    { text: "statics", icon: <LeaderboardOutlined />, to: "/bar" },
    { text: "pie", icon: <PieChartOutline />, to: "/pie" },
    { text: "line", icon: <ShowChart />, to: "/line" },
  ];

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{
            mx: "auto",
            my: 2,
            width: open ? 100 : 40,
            height: open ? 100 : 40,
            transition: "0.25s",
          }}
        />
        <Typography
          align="center"
          sx={{
            fontSize: 18,
            width: `${open ? "100%" : 0}`,
            height: `${open ? "auto" : 0}`,
            overflow: "hidden",
            transition: "0.25s",
          }}
        >
          Mohamed Aref
        </Typography>
        <Typography
          align="center"
          sx={{
            fontSize: 15,
            width: `${open ? "100%" : 0}`,
            height: `${open ? "auto" : 0}`,
            overflow: "hidden",
            transition: "0.25s",
            color: theme.palette.secondary.main,
          }}
        >
          Admin
        </Typography>
      <Divider />

      <List>
        {list1.map((item) => (
          <Tooltip key={item.text} title={!open && item.text} placement="right">
            <ListItem
              key={item.text}
              disablePadding
              sx={{
                display: "block",
                background:
                  location.pathname === item.to
                    ? theme.palette.mode === "dark"
                      ? grey[800]
                      : grey[300]
                    : "",
              }}
              onClick={() => navigate(item.to)}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </Tooltip>
        ))}
      </List>
      <Divider />
      <List>
        {list2.map((item) => (
          <Tooltip key={item.text} title={!open && item.text} placement="right">
            <ListItem
              key={item.text}
              disablePadding
              sx={{
                display: "block",
                background:
                  location.pathname === item.to
                    ? theme.palette.mode === "dark"
                      ? grey[800]
                      : grey[300]
                    : "",
              }}
              onClick={() => navigate(item.to)}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </Tooltip>
        ))}
      </List>
      <Divider />
      <List>
        {list3.map((item) => (
          <Tooltip key={item.text} title={!open && item.text} placement="right">
            <ListItem
              key={item.text}
              disablePadding
              sx={{
                display: "block",
                background:
                  location.pathname === item.to
                    ? theme.palette.mode === "dark"
                      ? grey[800]
                      : grey[300]
                    : "",
              }}
              onClick={() => navigate(item.to)}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </Tooltip>
        ))}
      </List>
    </Drawer>
  );
}
