import {Box, Paper,Card,TextField, Stack, Button,Checkbox} from '@mui/material';
import {styled } from '@mui/material/styles';

export const PageContainer = styled(Box)(({theme})=>({
    height: 'fit-content',
    width:'auto',
    margin:12,
    border: '1px solid white',
    paddingBottom:5,
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '&>*':{
        margin:10
    }
}));
export const StyledContainer = styled(Card)(({theme})=>({
    height: 300,
    width:500,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius:25
 }))