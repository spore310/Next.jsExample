import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/Nav/navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { SWRConfig } from 'swr';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  
});
function MyApp({ Component, pageProps }: AppProps) {
  const options= {refreshInterval: 5000}  
  return (<ThemeProvider theme={darkTheme}>
<SWRConfig value={options}>
  
        <NavBar/>
        <Component {...pageProps} />
        
</SWRConfig>
    </ThemeProvider>)
}

export default MyApp
