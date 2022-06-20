import { Stack, Box ,Typography, Paper} from '@mui/material'
import type { NextPage } from 'next'
import { alpha, styled } from '@mui/material/styles';

const Contain = styled(Paper)(({theme})=>({
  display: 'flex',
  flexDirection:'column',
  alignItems:'center',
  height: 500,
  width: 'fit-content',
  top:10,
  position:'relative',
  padding:5,
  borderRadius:25,
  left:'5%',
  '&>*':{
    margin:12
  }
}))
const Home: NextPage = (context) => {
  return (
    <Contain elevation={6}>
      <Typography variant='h1' color='secondary'>Welcome to The Home Page!</Typography>
      <Typography variant='body1' color='primary'>This site is aimed at demonstrating the power of <strong>Next.js</strong></Typography>
      <Typography variant='body1' color='primary'>With this framework we are able to control virtually every aspect of making a website. From Frontend to Backend we can control the entire flow of a website from one project.</Typography>
      <Typography variant='caption'  >P.S: Since you know React.js you already know 60% if next.js!!</Typography>
    </Contain>
  )
}

export default Home
