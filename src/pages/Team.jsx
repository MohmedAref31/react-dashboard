import {
  AdminPanelSettingsOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export default function Team() {
  const theme = useTheme();

  const cols = [
    { field: "id", align: "center", headerAlign: "center" },
    { field: "name", flex: 1, align: "center", headerAlign: "center" },
    { field: "age", align: "center", headerAlign: "center" },
    { field: "email", flex: 1, align: "center", headerAlign: "center" },
    { field: "address", align: "center", headerAlign: "center" },
    {
      field: "access",
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            color={"#fff"}
            display={"flex"}
            justifyContent={"space-evenly"}
            width={80}
            textTransform={"capitalize"}
            sx={{
              backgroundColor:
                access === "admin"
                  ? theme.palette.secondary.dark
                  : theme.palette.info.dark,
              p: 0.5,
              borderRadius: 1,
            }}
          >
            {access === "admin" ? (
              <SecurityOutlined fontSize="small" />
            ) : (
              <AdminPanelSettingsOutlined fontSize="small" />
            )}
            {access}
          </Box>
        );
      },
    },
  ];
  const rows = [
    {
      id: 1,
      name: "mohamed aref ali",
      age: 29,
      email: "mo@mo.com",
      address: "23 Main St",
      access: "admin",
    },
    {
      id: 2,
      name: "John Doe",
      age: 35,
      email: "john.doe@example.com",
      address: "123 Elm St",
      access: "user",
    },
    {
      id: 3,
      name: "Jane Smith",
      age: 28,
      email: "jane.smith@example.com",
      address: "456 Oak St",
      access: "admin",
    },
    {
      id: 4,
      name: "Michael Johnson",
      age: 40,
      email: "michael.johnson@example.com",
      address: "789 Pine St",
      access: "user",
    },
    {
      id: 5,
      name: "Emily Brown",
      age: 32,
      email: "emily.brown@example.com",
      address: "1010 Maple St",
      access: "user",
    },
    {
      id: 6,
      name: "David Lee",
      age: 45,
      email: "david.lee@example.com",
      address: "1111 Birch St",
      access: "admin",
    },
    {
      id: 7,
      name: "Jennifer Garcia",
      age: 29,
      email: "jennifer.garcia@example.com",
      address: "1313 Cedar St",
      access: "user",
    },
    {
      id: 8,
      name: "Robert Martinez",
      age: 38,
      email: "robert.martinez@example.com",
      address: "1515 Walnut St",
      access: "user",
    },
    {
      id: 9,
      name: "Sophia Hernandez",
      age: 42,
      email: "sophia.hernandez@example.com",
      address: "1717 Poplar St",
      access: "admin",
    },
    {
      id: 10,
      name: "William Young",
      age: 31,
      email: "william.young@example.com",
      address: "1919 Ash St",
      access: "user",
    },
  ];

  return (
    <div style={{ width: "100%" }}>
      <Box mb={2}>
        <Typography variant="h3" color={theme.palette.primary.main}>
          Team
        </Typography>
        <Typography
         textTransform={"capitalize"}
         color={"#777"}
         >
          here are our team members
        </Typography>
      </Box>
      <div style={{ height: 500, width: "98%", margin:"auto" }}>
        <DataGrid columns={cols} rows={rows} />
      </div>
    </div>
  );
}
