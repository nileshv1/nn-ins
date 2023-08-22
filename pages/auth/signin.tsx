import { Box, Button, Grid, TextField } from "@mui/material";
import { AnyAaaaRecord } from "dns";
import { signIn, useSession } from "next-auth/react";
import router from "next/router";
import React, { useState } from "react";

const signin = () => {
  const { data: session } = useSession();

  console.log(session);
  const [authState, setAuthState] = useState({
    username: "",
    password: "",
  });

  const handleAuth = async () => {
    signIn("credentials", {
      ...authState,
      redirect: false,
    }).then((response) => {
      console.log(response);
      if (response?.ok) {
        router.push("/");
      } else {
      }
    });
  };

  const handleFieldChange = (e: any) => {
    setAuthState((old) => ({ ...old, [e.target.id]: e.target.value }));
  };

  return (
    <Grid container alignItems="center" justifyContent="center" height="100vh">
      <Grid item>
        <TextField
          sx={{ mb: 1 }}
          onChange={handleFieldChange}
          value={authState.username}
          fullWidth
          label="Username"
          id="username"
        />
        <TextField
          sx={{ mb: 1 }}
          onChange={handleFieldChange}
          value={authState.password}
          fullWidth
          label="Password"
          type="password"
          id="password"
        />
        <Button
          sx={{ mb: 1 }}
          onClick={handleAuth}
          fullWidth
          variant="contained"
        >
          Login
        </Button>
      </Grid>
    </Grid>
  );
};

export default signin;
