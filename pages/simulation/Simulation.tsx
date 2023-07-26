import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid, InputLabel, TextField } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CustomModal from "@/components/Modal/CustomModal";

const Simulation: React.FC = () => {
  const [userInput, setUserInput] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (e: any) => {
    setUserInput(e.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card
            sx={{
              bgcolor: "initial",
              boxShadow: "none",
            }}
          >
            <CardMedia
              component="img"
              alt="habitation image"
              image="/images/policybanner.png"
            />
            <CardContent>
              <Typography variant="h5" color="text.secondary">
                Online simulation
              </Typography>
              {/* <hr className="horizontal-line" /> */}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ px: 2 }}>
        <Grid item xs={12}>
          <InputLabel htmlFor="component-simple">
            Enter your chassis number
            <InfoOutlinedIcon onClick={() => setOpen((open) => !open)} />
            {open && <CustomModal open={open} setOpen={setOpen} />}
          </InputLabel>
          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="ABCDEFG1234567890"
            sx={{ pt: 1 }}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} display="flex" justifyContent="flex-end">
          <Button
            href="/details"
            variant="contained"
            color="success"
            disabled={!userInput}
          >
            Next
          </Button>
        </Grid>

        <Grid item xs={12} display="flex" justifyContent="flex-end">
          <Button href="/details" variant="outlined">
            Without chassis number
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Simulation;
