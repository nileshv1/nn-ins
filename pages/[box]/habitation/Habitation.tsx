import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid, Divider } from "@mui/material";
import classes from "../../../styles/habitation/habitation.module.scss";
import Image from "next/image";
import { ROUTE_PATHS } from "@/constants/constants";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Banner from "@/components/Banner";
import { contenthome, policybanner } from "@/public/images";
import { useTheme } from "@mui/material/styles";

const Habitation: React.FC = () => {
  const router = useRouter();
  const { box } = router.query;
  const { t } = useTranslation();
  const handleSimulation = () => {
    router.push(`/${box}${ROUTE_PATHS.SIMULATION}`);
  };
  const theme = useTheme();

  return (
    <Grid container>
      <Banner
        image={policybanner}
        imageText={t("")}
        alt={t("bannerImageText")}
      />
      <Typography variant="body1" color="text.secondary" sx={{ my: 3, ml: 3 }}>
        {t("habitationCardContent")}
      </Typography>

      <Grid
        container
        item
        sx={{
          backgroundColor: "#002147",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          py: 4,
          px: { xs: 1, sm: 4 },
        }}
        border="2px solid orange"
      >
        <Grid item sx={{ pb: 3 }}>
          <Typography variant="body1" sx={{ color: "white" }}>
            {t("habitationHeading")}
          </Typography>
          <Divider
            color={theme.palette.primary.main}
            sx={{ height: 3.5, width: "5rem", mt: 0.5 }}
          />
        </Grid>
        <Grid container item border="2px solid orange" sx={{ display: "flex" }}>
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            border="4px solid green"
          >
            <Image
              src="/images/calculation.png"
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </Grid>
          <Grid
            item
            xs={9}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: { sx: "center", sm: "space-around" },
              alignItems: "center",
            }}
            border="4px solid green"
          >
            <Typography
              variant="body2"
              sx={{ color: "white", mb: { xs: 1, sm: 0 }, textAlign: "center" }}
            >
              {t("habitationSimulationContent")}
            </Typography>
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
          {/* <Grid item={true} xs={10}>
            <Grid
              container
              pl={8}
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
          </Grid>

          <Grid item xs={2}>
            <Image
              src="/images/calendar.png"
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </Grid>

          <Grid item={true} xs={10}>
            <Grid
              container
              pl={8}
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
          </Grid>

          <Grid item xs={2}>
            <Image
              src="/images/mail.png"
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </Grid>
          <Grid item={true} xs={10}>
            <Grid
              container
              pl={8}
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
          </Grid> */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Habitation;
