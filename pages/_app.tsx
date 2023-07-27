import type { AppProps } from "next/app";
import { I18nextProvider } from "react-i18next";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Layout from "@/layout/layout";
import { appWithTranslation } from "next-i18next";
import i18n from "../lib/i18n";

const theme = createTheme();
function App({ Component, pageProps }: AppProps) {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </I18nextProvider>
  );
}

export default appWithTranslation(App);
