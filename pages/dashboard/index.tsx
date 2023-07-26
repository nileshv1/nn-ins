import { HEADER_INSURANCE, HOME_HEADER_TEXT } from "@/constants/text_constants";
import { assurance_auto, contenthome, habitation } from "@/public/images";
import { Box, Container } from "@mui/material";
import React from "react";
import Image from "next/image";
import classes from "../../styles/page.module.scss";
import { useRouter } from "next/router";
import { ROUTE_PATHS } from "@/constants/constants";


const Dashbaord: React.FC = () => {
  const router = useRouter();

  const handleContinue = () => {
    router.push(ROUTE_PATHS.MOTOR);
  };
  return (
    <Box>
      <Box sx={{ py: 4 }}>
        <Box className={classes.page_header_text}>
          {HOME_HEADER_TEXT}
          <hr className={classes.horizontal_line} />
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#98AFC7",
        }}
      >
        <Box className={classes.header_text}>{HEADER_INSURANCE}</Box>
        <Box className={classes.home_content}>
          <a href="habitation">
            <Image src={assurance_auto} alt="" width="116" height="117" />
          </a>
          <a onClick={handleContinue}>
            <Image src={habitation} alt="" width="116" height="117" />
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashbaord;
