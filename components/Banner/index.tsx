import { Box, Grid } from "@mui/material";
import React from "react";
import { IBanner } from "./IBanner";
import Image from "next/image";
import classes from "../../styles/page.module.scss";

const Banner = (props: IBanner) => {
  return (
    <Grid container className={classes.banner_image_container}>
      <Image
        src={props.image}
        alt="Banner Image"
        priority={true}
        className={classes.banner_image}
      />
      <span>{props.imageText}</span>
    </Grid>
  );
};

export default Banner;
