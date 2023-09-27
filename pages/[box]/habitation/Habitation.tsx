import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Grid, Divider, Button } from "@mui/material";
import Image from "next/image";
import { ROUTE_PATHS } from "@/constants/constants";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Banner from "@/components/Banner";
import { policybanner } from "@/public/images";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";

const Habitation: React.FC = () => {
  const router = useRouter();
  const { box } = router.query;
  const { t } = useTranslation();
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
        <Grid container item sx={{ display: "flex", mt: 1 }}>
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
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
              justifyContent: { sx: "center", sm: "space-between" },
              alignItems: "center",
              px: { lg: 10, md: 5 },
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: "white", mb: { xs: 1, sm: 0 }, textAlign: "center" }}
            >
              {t("habitationSimulationContent")}
            </Typography>
            <Link href={`/${box}${ROUTE_PATHS.SIMULATION}`}>
              <Button
                variant="contained"
                color="success"
                sx={{
                  width: 140,
                }}
              >
                {t("habitationSimulationBtn")}
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Grid container item sx={{ display: "flex", mt: 2 }}>
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src="/images/calendar.png"
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
              justifyContent: { sx: "center", sm: "space-between" },
              alignItems: "center",
              px: { lg: 10, md: 5 },
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: "white", mb: { xs: 1, sm: 0 }, textAlign: "center" }}
            >
              {t("habitationRendezvousContent")}
            </Typography>
            <Link href={`/${box}${ROUTE_PATHS.SIMULATION}`}>
              <Button
                variant="contained"
                color="warning"
                sx={{
                  width: 140,
                }}
              >
                {t("habitationRendezvousBtn")}
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Grid container item sx={{ display: "flex", mt: 2 }}>
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src="/images/mail.png"
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
              justifyContent: { sx: "center", sm: "space-between" },
              alignItems: "center",
              px: { lg: 10, md: 5 },
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: "white", mb: { xs: 1, sm: 0 }, textAlign: "center" }}
            >
              {t("habitationContactContent")}
            </Typography>
            <Link href={`/${box}${ROUTE_PATHS.SIMULATION}`}>
              <Button
                variant="contained"
                sx={{
                  width: 140,
                }}
              >
                {t("habitationContactBtn")}
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Habitation;
