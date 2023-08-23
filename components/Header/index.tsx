import { headerlogo, nngroup } from "@/public/images";
import { Box, Grid } from "@mui/material";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import page_classes from "../../styles/page.module.scss";
import classes from "./header.module.scss";
import { useEffect } from "react";

const Header: React.FC = () => {
  const router = useRouter();
  const {box}  = router.query;
  console.log(box,"header123");
  const { t } = useTranslation();
 //  var box;
  // useEffect(() => {
  //  var box = localStorage.getItem("box");
  //  console.log(box,"header91")
  // },[box])

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
        <Grid className={classes.header_profile}>{t("headerProfileText")}</Grid>
        <Grid className={classes.header_company_info}>
          <Grid>{t("headerCompanyText")}</Grid>
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
