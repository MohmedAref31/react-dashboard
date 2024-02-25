
import { Box,Container, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import SectionHeader from "../componentes/SectionHeader";

export default function Contacts() {
  const theme = useTheme();

  const cols = [
    { field: "id", align: "center", headerAlign: "center" },
    { field: "name", flex: 1, align: "center", headerAlign: "center" },
    { field: "age", align: "center", headerAlign: "center" },
    { field: "email", flex: 1, align: "center", headerAlign: "center" },
    {
      field: "phoneNumber",
      headerText: "phone",
      align: "center",
      headerAlign: "center",
    },
    { field: "address", align: "center", headerAlign: "center" },
  ];
  const rows = [
    {
      id: 1,
      name: "mohamed aref ali",
      age: 29,
      email: "mo@mo.com",
      phoneNumber: "123-456-7890",
      address: "23 Main St",
    },
    {
      id: 2,
      name: "John Doe",
      age: 35,
      email: "john.doe@example.com",
      phoneNumber: "987-654-3210",
      address: "123 Elm St",
    },
    {
      id: 3,
      name: "Jane Smith",
      age: 28,
      email: "jane.smith@example.com",
      phoneNumber: "555-555-5555",
      address: "456 Oak St",
    },
    {
      id: 4,
      name: "Michael Johnson",
      age: 40,
      email: "michael.johnson@example.com",
      phoneNumber: "111-222-3333",
      address: "789 Pine St",
    },
    {
      id: 5,
      name: "Emily Brown",
      age: 32,
      email: "emily.brown@example.com",
      phoneNumber: "444-444-4444",
      address: "1010 Maple St",
    },
    {
      id: 6,
      name: "David Lee",
      age: 45,
      email: "david.lee@example.com",
      phoneNumber: "777-777-7777",
      address: "1111 Birch St",
    },
    {
      id: 7,
      name: "Jennifer Garcia",
      age: 29,
      email: "jennifer.garcia@example.com",
      phoneNumber: "999-999-9999",
      address: "1313 Cedar St",
    },
    {
      id: 8,
      name: "Robert Martinez",
      age: 38,
      email: "robert.martinez@example.com",
      phoneNumber: "666-666-6666",
      address: "1515 Walnut St",
    },
    {
      id: 9,
      name: "Sophia Hernandez",
      age: 42,
      email: "sophia.hernandez@example.com",
      phoneNumber: "333-333-3333",
      address: "1717 Poplar St",
    },
    {
      id: 10,
      name: "William Young",
      age: 31,
      email: "william.young@example.com",
      phoneNumber: "222-222-2222",
      address: "1919 Ash St",
    },
    // Add more rows as needed...
  ];

  return (
    <Container style={{ width: "100%" }}>
   <SectionHeader title={"contacts"} text = {"you can find your contacts here"}/>

      <Box style={{ height: 600, width: "98%", margin: "auto" }}>
        <DataGrid
          columns={cols}
          rows={rows}
          slots={{ toolbar: GridToolbar }}
          checkboxSelection
        />
      </Box>
    </Container>
  );
}
