import { ROUTE_PATHS } from "@/constants/constants";
import { assurance_auto, contenthome, habitation } from "@/public/images";

import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import classes from "../../../styles/page.module.scss";
// import dynamic from "next/dynamic";
import Banner from "@/components/Banner";
import { Box, Grid } from "@mui/material";
import styles from "../../../styles/variables.module.scss";
import { useTheme } from '@mui/material/styles';

// const Banner = dynamic(() => import("@/components/Banner"), { ssr: true });

const Home: React.FC = () => {
  const router = useRouter();
  const { box } = router.query;
  var flag = box ? box : "rgf"
  const theme = useTheme();
  const { t } = useTranslation();

  const handleContinue = () => {
    // router.push(ROUTE_PATHS.HABITATION);
    router.push(`/${flag}/${ROUTE_PATHS.HABITATION}`);
  };
  return (
    <Grid>
      <Banner
        image={contenthome}
        imageText={t("bannerImageText")}
        alt={t("bannerImageText")}
      />
      <Grid item sx={{ py: 4 }}>
        <Grid className={classes.page_header_text}>
          {t("bannerImageText")}
          <hr className={classes.horizontal_line}
           style={{ backgroundColor:theme.palette.primary.main }}/>
        </Grid>
      </Grid>
      <Grid
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
