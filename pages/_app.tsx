import type { AppProps } from "next/app";
import { I18nextProvider } from "react-i18next";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Layout from "@/layout/layout";
import { appWithTranslation } from "next-i18next";
import i18n from "../lib/i18n";
import { useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import flag from "./../flag.json";

const theme = createTheme();
function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { box } = router.query;
  const flagData = flag.flag.filter(f => f.id == box)
  const flagColor = flagData[0]?.color
  const flagbackgroundColor = flagData[0]?.backgroundColor
  const flagTheme = createTheme({
    palette: {
      primary: {
        main: flagColor ? flagColor : "#55bb14",
        light: flagbackgroundColor ? flagbackgroundColor : "55bb14c2",
      },
    },
    // Other properties...
  });
  const Layout = dynamic(() => import("../layout/layout"), { ssr: false });

  useEffect(() => {
    // Ensure the locale is set correctly for initial page load
    // if (!i18n.language) {
    i18n.changeLanguage(window.navigator.language);
    // }
    // localStorage.setItem("box", box);
  }, [box]);

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={flagTheme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </I18nextProvider>
  );
}

export default appWithTranslation(App);
