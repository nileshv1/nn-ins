import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { IBanner } from "./IBanner";
import Image from "next/image";
import classes from "../../styles/page.module.scss";

const Banner = (props: IBanner) => {
  return (
    <Grid container sx={{ position: "relative" }}>
      <Image
        src={props.image}
        alt={props.alt}
        priority={true}
        style={{ width: "100%", height: "auto" }}
      />
      <Typography
        variant="body1"
        sx={{
          position: "absolute",
          top: "30%",
          left: "4%",
          maxWidth: "200px",
          color: "white",
        }}
      >
        {props.imageText}
      </Typography>
    </Grid>
  );
};

export default Banner;
