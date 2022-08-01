import React, { Fragment, useState } from "react";
import bcrypt from "bcryptjs";
import {
  Alert,
  Box,
  Button,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
import { adminLink, dashboardLink } from "../../common/routes";

function AdminPage() {
  const originalPassword = "pR0mO+e_@Dm!9";
  const salt = "$2a$09$qa7FJIyK31D8nJjQD4EHpO";

  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [isNotInvalid, setIsNotInvalid] = useState(false);

  const savedPassword = localStorage.getItem("promot");
  let originalHashedPassword = bcrypt.hashSync(originalPassword, salt);
  if (savedPassword === originalHashedPassword)
    navigate(`${adminLink}/${dashboardLink}`);

  const handleLogin = () => {
    if (password === originalPassword) {
      let hashedPassword = bcrypt.hashSync(password, salt);
      localStorage.setItem("promot", hashedPassword);
      navigate(`${adminLink}/${dashboardLink}`);
    } else setIsNotInvalid(true);
  };

  const handleClose = () => {
    setIsNotInvalid(false);
  };

  return (
    <Fragment>
      <Snackbar
        open={isNotInvalid}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          <strong>Invalid Password!</strong> Please try again with correct
          Password.
        </Alert>
      </Snackbar>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          width: { xs: "90%", sm: "50%", md: "30%", xl: "20%" },
          my: 10,
          mx: "auto",
          boxShadow: "1px 5px 12px #eee0e0",
          py: 6,
        }}
      >
        <Box component="img" src={logo} alt="" sx={{ width: 200 }} />
        <Typography sx={{ fontSize: 20, letterSpacing: 1 }}>
          Welcome to Admin Panel
        </Typography>
        <TextField
          type="password"
          placeholder="**********"
          variant="standard"
          sx={{ width: "75%", mt: 10 }}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="outlined"
          color="error"
          sx={{ width: "75%", my: 4 }}
          onClick={handleLogin}
        >
          login
        </Button>
      </Stack>
    </Fragment>
  );
}

export default AdminPage;
