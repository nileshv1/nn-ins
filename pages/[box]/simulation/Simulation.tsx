import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid, InputLabel, TextField } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CustomModal from "@/components/Modal/CustomModal";
import classes from "../../../styles/page.module.scss";
import Link from "next/link";
import { ROUTE_PATHS } from "@/constants/constants";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import styles from "../../../styles/variables.module.scss";
import { useTheme } from '@mui/material/styles';

const Simulation: React.FC = () => {
  const router = useRouter();
  const { box } = router.query;
  const theme = useTheme();
  const { t } = useTranslation();
  const [userInput, setUserInput] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (e: any) => {
    setUserInput(e.target.value);
  };

  const handleClickNext = () => {
    router.push(`/${box}${ROUTE_PATHS.CARDETAILS}`);
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
                {t("simulationHeaderText")}
              </Typography>
              <hr className={classes.horizontal_line} 
              style={{ backgroundColor:theme.palette.primary.main }}/>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ px: 2 }}>
        <Grid item xs={12}>
          <InputLabel htmlFor="component-simple">
            {t("simulationContentLabel")}
            <InfoOutlinedIcon onClick={() => setOpen((open) => !open)} />
            {/* {open && <CustomModal open={open} setOpen={setOpen} />} */}
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
            sx={{
              px: 9,
              backgroundColor: theme.palette.primary.light,
              ":hover": {
                bgcolor: theme.palette.primary.main,
              },
            }}
            disabled={!userInput}
            onClick={handleClickNext}
          >
            {t("simulationNextBtn")}
          </Button>
          .
        </Grid>

        <Grid item xs={12} display="flex" justifyContent="flex-end">
          <Link href={`/${box}${ROUTE_PATHS.YOURCAR}`}>
            <Button
              // onClick={handleClick}
              variant="outlined"
              sx={{
                borderColor: theme.palette.primary.main,
                color: theme.palette.primary.main,
                ":hover": {
                  borderColor: theme.palette.primary.main,
                },
                
              }}
            >
              {t("simulationWithoutChassisBtn")}
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Simulation;
