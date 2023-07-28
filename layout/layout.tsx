import React, { PropsWithChildren } from "react";
import { Container } from "@mui/material";
import classes from "../styles/page.module.scss";
import Grid from "@mui/material/Unstable_Grid2";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/Header"), { ssr: false });

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Container className={classes.home_container}>
      <Grid xs={12} sm={12} md={6} mdOffset={3}>
        <Header />
        {children}
      </Grid>
    </Container>
  );
};

export default Layout;
