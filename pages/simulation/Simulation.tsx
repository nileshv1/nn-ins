import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid, InputLabel, TextField } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CustomModal from "@/components/Modal/CustomModal";
import classes from "../../styles/page.module.scss";
import {
  SIMULATION_HEADER_TEXT,
  SIMULATION_CONTENT_LABEL,
  SIMULATION_NEXT_BTN,
  SIMULATION_WITHOUT_CHASSIS_BTN,
} from "@/constants/text_constants";
import { ROUTE_PATHS } from "@/constants/constants";
import { useRouter } from "next/router";

const Simulation: React.FC = () => {
  const router = useRouter();
  const [userInput, setUserInput] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (e: any) => {
    setUserInput(e.target.value);
  };

  const handleClickNext = () => {
    router.push(ROUTE_PATHS.CARDETAILS);
    setUserInput("");
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
                {SIMULATION_HEADER_TEXT}
              </Typography>
              {/* <hr className="horizontal-line" /> */}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ px: 2 }}>
        <Grid item xs={12}>
          <InputLabel htmlFor="component-simple">
            {SIMULATION_CONTENT_LABEL}
            <InfoOutlinedIcon onClick={() => setOpen((open) => !open)} />
            {open && <CustomModal open={open} setOpen={setOpen} />}
          </InputLabel>
          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="ABCDEFG1234567890"
            sx={{ pt: 1 }}
            value={userInput}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} display="flex" justifyContent="flex-end">
          <Button
            variant="contained"
            // color="success"
            sx={{ px: 9, backgroundColor: "#55B862" }}
            disabled={!userInput}
            // href={ROUTE_PATHS.CARDETAILS}
            onClick={handleClickNext}
          >
            {SIMULATION_NEXT_BTN}
          </Button>
          .
        </Grid>

        <Grid item xs={12} display="flex" justifyContent="flex-end">
          <Button
            href={ROUTE_PATHS.YOURCAR}
            variant="outlined"
            className={classes.simulation_Btn}
          >
            {SIMULATION_WITHOUT_CHASSIS_BTN}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Simulation;
