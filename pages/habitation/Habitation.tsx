import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import classes from "../../styles/habitation/habitation.module.scss";
import Image from "next/image";
import { ROUTE_PATHS } from "@/constants/constants";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import styles from "../../styles/variables.module.scss";

const Habitation: React.FC = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const handleSimulation = () => {
    router.push(ROUTE_PATHS.SIMULATION);
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
              <Typography variant="body2" color="text.secondary">
                {t("habitationCardContent")}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box className={classes.info_section}>
        <Grid container spacing={2} alignItems="center" sx={{ px: 2 }}>
          <Grid item xs={12}>
            <Typography variant="body2" className={classes.text_style}>
              {t("habitationHeading")}
            </Typography>
            <hr className={classes.horizontal_line} />
          </Grid>

          <Grid item xs={2}>
            <Image
              src="/images/calculation.png"
              width={30}
              height={30}
              alt="Picture of the author"
            />
          </Grid>
          <Grid item xs={5}>
            <Typography
              variant="body2"
              className={classes.text_style}
              sx={{ fontSize: 12 }}
            >
              {t("habitationSimulationContent")}
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Button
              variant="contained"
              color="success"
              sx={{ size: { xs: "small", md: "medium", width: 110 } }}
              onClick={handleSimulation}
            >
              {t("habitationSimulationBtn")}
            </Button>
          </Grid>

          <Grid item xs={2}>
            <Image
              src="/images/calendar.png"
              width={30}
              height={30}
              alt="Picture of the author"
            />
          </Grid>
          <Grid item xs={5}>
            <Typography
              variant="subtitle1"
              className={classes.text_style}
              sx={{ fontSize: 12 }}
            >
              {t("habitationRendezvousContent")}
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Button
              variant="contained"
              size="medium"
              color="warning"
              sx={{ size: { xs: "small", md: "medium", width: 110 } }}
            >
              {t("habitationRendezvousBtn")}
            </Button>
          </Grid>

          <Grid item xs={2}>
            <Image
              src="/images/mail.png"
              width={30}
              height={30}
              alt="Picture of the author"
            />
          </Grid>
          <Grid item xs={5}>
            <Typography
              variant="body2"
              className={classes.text_style}
              sx={{ fontSize: 12 }}
            >
              {t("habitationContactContent")}
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Button
              variant="contained"
              size="medium"
              sx={{
                size: { xs: "small", md: "medium", width: 110 },
              }}
            >
              {t("habitationContactBtn")}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Habitation;
