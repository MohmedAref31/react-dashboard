import {useEffect, useMemo, useState} from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Header from "../componentes/Header";
import Sidebar from "../componentes/Sidebar";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const [mode, setMode] = useState("dark")
useEffect(()=>{
   const localMode =  localStorage.getItem("mode");
    if(localMode) 
      setMode(localMode);
},[])


const theme = useMemo(()=>  createTheme({
  palette:{
    mode:mode
  }
}),[mode])
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header open={open} handleDrawerOpen={handleDrawerOpen} setMode = {setMode}/>
      <Sidebar open={open} handleDrawerClose={handleDrawerClose} />

      <Box component="main" sx={{ flexGrow: 1, p: 3, pt:10 }}>
        <Outlet/>
      </Box>

    </Box>
    </ThemeProvider>
  );
}
