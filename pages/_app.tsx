import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/Nav/navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  
});
function MyApp({ Component, pageProps }: AppProps) {
  
  return (<ThemeProvider theme={darkTheme}>

      <NavBar/>
      <Component {...pageProps} />
      
    </ThemeProvider>)
}

export default MyApp
