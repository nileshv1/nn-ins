import { ROUTE_PATHS } from "@/constants/constants";
import { assurance_auto, contenthome, habitation } from "@/public/images";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Banner from "@/components/Banner";
import { Box, Grid, Typography, Divider, IconButton } from "@mui/material";
import styles from "../../../styles/variables.module.scss";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";

const Home: React.FC = () => {
  const router = useRouter();
  const { box } = router.query;
  var flag = box ? box : "rgf";
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Grid container>
      <Banner
        image={contenthome}
        imageText={t("bannerImageText")}
        alt={t("bannerImageText")}
      />
      <Grid container item sx={{ py: 4 }}>
        <Grid item>
          <Typography variant="h4">{t("bannerImageText")}</Typography>
          <Divider
            color={theme.palette.primary.main}
            sx={{ height: 3.5, width: "5rem", mt: 0.5 }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        item
        sx={{
          backgroundColor: styles.homebgColor,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="body1" sx={{ color: "white", my: 4, ml: "4%" }}>
          {t("headerInsurance")}
        </Typography>
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            mb: 6,
          }}
        >
          <Link href={`/${flag}/${ROUTE_PATHS.HABITATION}`}>
            <Image
              src={assurance_auto}
              alt="assuranceimg"
              width="119"
              height="117"
              priority={true}
            />
          </Link>
          <Link href={`/${flag}/${ROUTE_PATHS.HABITATION}`}>
            <Image
              src={habitation}
              alt="habitationimg"
              width="119"
              height="117"
              priority={true}
            />
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
