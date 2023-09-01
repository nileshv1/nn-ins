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
import store from "./store";
import { Provider } from "react-redux";

const theme = createTheme();
function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { box } = router.query;
  const Layout = dynamic(() => import("../layout/layout"), { ssr: false });

  useEffect(() => {
    // Ensure the locale is set correctly for initial page load
    // if (!i18n.language) {
    i18n.changeLanguage(window.navigator.language);
    // }
    //
    // dispatch(getFlagData());
  }, [box]);

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </I18nextProvider>
    </Provider>
  );
}

export default appWithTranslation(App);
