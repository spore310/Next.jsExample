import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/Nav/navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { SWRConfig } from 'swr';
import { ApolloProvider } from '@apollo/client';
import {client} from '../apollo-client';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },

});
function MyApp({ Component, pageProps }: AppProps) {
  const options = { refreshInterval: 5000 }
  return (
  <ThemeProvider theme={darkTheme}>
<ApolloProvider client={client}>

    <SWRConfig value={options}>

      <NavBar />
      <Component {...pageProps} />

    </SWRConfig>
</ApolloProvider>
  </ThemeProvider>)
}

export default MyApp
