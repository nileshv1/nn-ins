// import { headerlogo, nngroup } from "@/public/images";
import { headerlogo, nngroup } from "@/public/images";
import { Box } from "@mui/material";
import React from "react";
import Image from "next/image";
import classes from "./header.module.scss";
import { useRouter } from "next/router";
import page_classes from "../../styles/page.module.scss";

import {
  HEADER_COMPANY_TEXT,
  HEADER_PROFILE_TEXT,
} from "@/constants/text_constants";

const Header: React.FC = () => {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/");
  };

  return (
    <Box className={classes.header_container}>
      <Box>
        <Image
          src={headerlogo}
          width={50}
          height={50}
          alt="Header Logo"
          onClick={handleContinue}
          className={page_classes.cursor}
        />
      </Box>
      <Box>
        <Box className={classes.header_profile}>{HEADER_PROFILE_TEXT}</Box>
        <Box className={classes.header_company_info}>
          <Box>{HEADER_COMPANY_TEXT}</Box>
          <Image src={nngroup} width={30} height={30} alt="Company Logo" />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
