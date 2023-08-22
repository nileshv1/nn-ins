import type { AppProps } from "next/app";
import { I18nextProvider } from "react-i18next";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Layout from "@/layout/layout";
import { appWithTranslation } from "next-i18next";
import i18n from "../lib/i18n";
import { useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

const theme = createTheme();
function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  useEffect(() => {
    // Ensure the locale is set correctly for initial page load
    // if (!i18n.language) {
    i18n.changeLanguage(window.navigator.language);
    // }
  }, []);

  return (
    <SessionProvider session={session}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </I18nextProvider>
    </SessionProvider>
  );
}

export default appWithTranslation(App);
