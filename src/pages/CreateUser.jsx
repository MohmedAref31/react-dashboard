import {
  Alert,
  Box,
  Button,
  MenuItem,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SectionHeader from "../componentes/SectionHeader";
export default function CreateUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [open, setOpen] = useState(false);

  const onSubmit = (data) => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const roles = [
    { value: "Admin", label: "Admin" },
    { value: "User", label: "User" },
    { value: "Manager", label: "Manager" },
  ];
  return (
    <Box>
      <SectionHeader title={'create user'}/>

    <Box
      component="form"
      noValidate
      autoComplete="off"
      display={"flex"}
      flexDirection={"column"}
      gap={3}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack
        direction="row"
        gap={2}
        justifyContent={"space-between"}
        sx={{ width: "100%" }}
      >
        <TextField
          label="first name"
          variant="filled"
          sx={{ flexGrow: 1 }}
          {...register("firstName", { required: true, minLength: 3 })}
          error={errors.firstName ? true : false}
          helperText={
            errors.firstName ? "this field is required and min length is 3" : ""
          }
        />
        <TextField
          label="last name"
          variant="filled"
          sx={{ flexGrow: 1 }}
          {...register("lastName", { required: true, minLength: 3 })}
          error={errors.lastName ? true : false}
          helperText={
            errors.lastName ? "this field is required and min length is 3" : ""
          }
        />
      </Stack>

      <TextField
        label="email"
        variant="filled"
        fullWidth
        {...register("email", {
          required: true,
          // eslint-disable-next-line no-useless-escape
          pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        })}
        error={errors.email ? true : false}
        helperText={errors.email ? "enter a valid email" : ""}
      />
      <TextField
        label="phone"
        variant="filled"
        fullWidth
        {...register("phone", {
          required: true,
          // eslint-disable-next-line no-useless-escape
          pattern: /^0[0-9]{10}/g,
        })}
        error={errors.phone ? true : false}
        helperText={errors.phone ? "enter a valid egyptian phone" : ""}
      />
      <TextField label="address" variant="filled" />
      <TextField label="role" variant="filled" select defaultValue={"User"}>
        {roles.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Box sx={{ textAlign: "right" }}>
        <Button variant="contained" sx={{ fontWeight: "bold" }} type={"submit"}>
          create user
        </Button>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%", color: "#fff" }}
        >
          user created successfully
        </Alert>
      </Snackbar>
    </Box>
    </Box>
  );
}
