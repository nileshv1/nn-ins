import { ROUTE_PATHS } from "@/constants/constants";
import { assurance_auto, contenthome, habitation } from "@/public/images";

import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import classes from "../../../styles/page.module.scss";
import Banner from "@/components/Banner";
import { Box, Grid, Typography, Divider } from "@mui/material";
import styles from "../../../styles/variables.module.scss";
import { useTheme } from "@mui/material/styles";

const Home: React.FC = () => {
  const router = useRouter();
  const { box } = router.query;
  var flag = box ? box : "rgf";
  const theme = useTheme();
  const { t } = useTranslation();

  const handleContinue = () => {
    // router.push(ROUTE_PATHS.HABITATION);
    router.push(`/${flag}/${ROUTE_PATHS.HABITATION}`);
  };
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
        }}
      >
        <Grid className={classes.header_text}>{t("headerInsurance")}</Grid>
        <Grid className={classes.home_content}>
          <a onClick={handleContinue} className={classes.cursor}>
            <Image
              src={assurance_auto}
              alt="assuranceimg"
              width="116"
              height="117"
              priority={true}
            />
          </a>
          <a onClick={handleContinue} className={classes.cursor}>
            <Image
              src={habitation}
              alt="habitationimg"
              width="116"
              height="117"
              priority={true}
            />
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
