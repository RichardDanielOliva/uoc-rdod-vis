import { Provider } from "react-redux";
import Head from "next/head";
import store from "../redux/store";
import Layout from "../components/layout/layout.component";
import GlobalStyle, { MuiTheme } from "../config/styles/global-styles";
import { ThemeProvider } from '@mui/material/styles';
import { setAccidentData } from "../redux/data/data.actions";

store.dispatch(setAccidentData());

export const App = ({ Component, pageProps }) => {
  return (
      <Provider store={store}>
        <Layout>
            <Head>
              <title>RDOD&reg; - Visualización de datos</title>
            </Head>
            <ThemeProvider theme={MuiTheme}>
              <Component {...pageProps} />
            </ThemeProvider>
          </Layout>
          <GlobalStyle />
      </Provider>
  );
};

export default App;
