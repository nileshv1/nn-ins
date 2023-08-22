import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import classes from "../../../styles/habitation/habitation.module.scss";
import Image from "next/image";
import { ROUTE_PATHS } from "@/constants/constants";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import styles from "../../../styles/variables.module.scss";

const Habitation: React.FC = () => {
  const router = useRouter();
  const { box } = router.query;
  const { t } = useTranslation();

  const handleSimulation = () => {
    // router.push(ROUTE_PATHS.SIMULATION);
    router.push(`/${box}/${ROUTE_PATHS.SIMULATION}`);
  };

  return (
    <Grid sx={{ flexGrow: 1 }}>
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

      <Grid className={classes.info_section}>
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
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </Grid>
          <Grid
            container
            pl={8}
            xs={10}
            md={10}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "start", md: "center" },
            }}
          >
            <Grid item xs={12} md={6}>
              <Typography
                variant="body2"
                className={classes.text_style}
                sx={{ fontSize: 12 }}
              >
                {t("habitationSimulationContent")}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                variant="contained"
                color="success"
                sx={{
                  width: 140,
                }}
                onClick={handleSimulation}
              >
                {t("habitationSimulationBtn")}
              </Button>
            </Grid>
          </Grid>

          <Grid item xs={2}>
            <Image
              src="/images/calendar.png"
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </Grid>

          <Grid
            container
            pl={8}
            xs={10}
            md={10}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "start", md: "center" },
            }}
          >
            <Grid item xs={12} md={6}>
              <Typography
                variant="body2"
                className={classes.text_style}
                sx={{ fontSize: 12 }}
              >
                {t("habitationRendezvousContent")}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                variant="contained"
                color="warning"
                sx={{
                  width: 140,
                }}
              >
                {t("habitationRendezvousBtn")}
              </Button>
            </Grid>
          </Grid>

          <Grid item xs={2}>
            <Image
              src="/images/mail.png"
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </Grid>
          <Grid
            container
            pl={8}
            xs={10}
            md={10}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "start", md: "center" },
            }}
          >
            <Grid item xs={12} md={6}>
              <Typography
                variant="body2"
                className={classes.text_style}
                sx={{ fontSize: 12 }}
              >
                {t("habitationContactContent")}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                variant="contained"
                sx={{
                  width: 140,
                }}
              >
                {t("habitationContactBtn")}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Habitation;
