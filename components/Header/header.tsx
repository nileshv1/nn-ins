import { headerlogo, nngroup } from "@/public/images";
import { Box, Grid, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

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
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Grid item sx={{ cursor: "pointer", mt: 1 }}>
        <Image
          src={headerlogo}
          width={50}
          height={50}
          alt="Header Logo"
          priority={true}
          onClick={handleContinue}
        />
      </Grid>
      <Grid item>
        <Typography variant="h4">{t("headerProfileText")}</Typography>
        <Grid
          sx={{ display: "flex", justifyContent: "end", alignItems: "center" }}
        >
          <Typography variant="h5">{t("headerCompanyText")}</Typography>
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
