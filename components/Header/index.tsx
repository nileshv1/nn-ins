import { headerlogo, nngroup } from "@/public/images";
import { Box, Grid } from "@mui/material";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import page_classes from "../../styles/page.module.scss";
import classes from "./header.module.scss";

const Header: React.FC = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const handleContinue = () => {
    router.push("/");
  };

  return (
    <Grid container className={classes.header_container}>
      <Grid item>
        <Image
          src={headerlogo}
          width={50}
          height={50}
          alt="Header Logo"
          priority={true}
          onClick={handleContinue}
          className={page_classes.cursor}
        />
      </Grid>
      <Grid item>
        <Box className={classes.header_profile}>{t("headerProfileText")}</Box>
        <Box className={classes.header_company_info}>
          <Box>{t("headerCompanyText")}</Box>
          <Image
            src={nngroup}
            width={30}
            height={30}
            alt="Company Logo"
            priority={true}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Header;
