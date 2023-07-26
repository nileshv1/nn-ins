// import { headerlogo, nngroup } from "@/public/images";
import { headerlogo, nngroup } from "@/public/images";
import { Box } from "@mui/material";
import React from "react";
import Image from "next/image";
import classes from "./header.module.scss";

const Header = () => {
  return (
    <Box className={classes.header_container}>
      <Box className="header-logo">
        <Image src={headerlogo} width={50} height={50} alt="Header Logo" />
      </Box>
      <Box>
        <Box className={classes.header_profile}>Courtier en assurance</Box>
        <Box className={classes.header_company_info}>
          <Box>supporte par</Box>
          <Image src={nngroup} width={30} height={30} alt="Company Logo" />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
