import { headerlogo, nngroup } from "@/public/images";
import { Box, Grid, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import page_classes from "../../styles/page.module.scss";
import classes from "./header.module.scss";

const Header: React.FC = () => {
  const router = useRouter();
  const { box } = router.query;
  var flag = box ? box : "rgf";
  const { t } = useTranslation();

  const handleContinue = () => {
    router.push(`/${flag}`);
  };

  return (
    <Grid
      container
      border="2px solid red"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Grid item border="1px solid blue" sx={{ cursor: "pointer" }}>
        <Image
          src={headerlogo}
          width={60}
          height={60}
          alt="Header Logo"
          priority={true}
          onClick={handleContinue}
        />
      </Grid>
      <Grid item>
        <Typography variant="h5">{t("headerProfileText")}</Typography>
        <Grid border="1px solid red" sx={{ display: "flex" }}>
          <Typography border="1px solid blue" variant="h6">
            {t("headerCompanyText")}
          </Typography>
          <Image
            src={nngroup}
            width={30}
            height={30}
            alt="Company Logo"
            priority={true}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
