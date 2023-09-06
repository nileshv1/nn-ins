import React, { PropsWithChildren, useEffect } from "react";
import { Container } from "@mui/material";
import classes from "../styles/page.module.scss";
import Grid from "@mui/material/Unstable_Grid2";
import dynamic from "next/dynamic";
import { connect, useDispatch, useSelector, Provider } from "react-redux";
import { getFlagData } from "./../pages/feature/flag/flagSlice";
import { useRouter } from "next/router";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import store from "../pages/store";

type RootState = ReturnType<typeof store.getState>;

const Header = dynamic(() => import("@/components/Header"), { ssr: false });

const Layout = ({ children }: PropsWithChildren) => {
  const dispatch = useDispatch();
  const flags = useSelector((state: RootState) => state.flags);
  console.log(flags, "Flags in Layout");
  const router = useRouter();
  const { box } = router.query;
  const flagData = flags.flagsData?.filter((f:any) => f.id == box);
  console.log(flagData, "flagData in layout");
  const flagColor = flagData[0]?.color;
  const flagbackgroundColor = flagData[0]?.backgroundColor;
  const flagTheme = createTheme({
    palette: {
      primary: {
        main: flagColor ? flagColor : "#55bb14",
        light: flagbackgroundColor ? flagbackgroundColor : "55bb14c2",
      },
    },
    // Other properties...
  });
  useEffect(() => {
    dispatch(getFlagData());
  }, []);

  return (
    <ThemeProvider theme={flagTheme}>
      <Container className={classes.home_container}>
        <Grid xs={12} sm={12} md={6} mdOffset={3}>
          <Header />
          {children}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
