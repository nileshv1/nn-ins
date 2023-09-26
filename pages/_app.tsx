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

const theme = createTheme();
function App({ Component, pageProps }: AppProps) {
  const primaryTheme = createTheme({
    typography: {
      h4: {
        fontSize: "18px",
        fontWeight: "bold",
      },
      h5: {
        fontSize: "15px",
      },
    },
    palette: {
      primary: {
        main: "#55bb14",
        light: "#55bb14c2",
      },
    },
    // Other properties...
  });
  const secondaryTheme = createTheme({
    palette: {
      primary: {
        main: "#ff8400",
        light: "#ff8400bf",
      },
    },
    // Other properties...
  });
  const router = useRouter();
  const { box } = router.query;
  // console.log(box,"app page");
  const selectedTheme = box === "org" ? secondaryTheme : primaryTheme;
  const Layout = dynamic(() => import("../layout/layout"), { ssr: false });

  useEffect(() => {
    // Ensure the locale is set correctly for initial page load
    // if (!i18n.language) {
    i18n.changeLanguage(window.navigator.language);
    // }
  }, [box]);

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={selectedTheme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </I18nextProvider>
  );
}

export default appWithTranslation(App);
