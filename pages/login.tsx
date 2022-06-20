import React,{ FC} from 'react';
import LoginForm from '../components/Login/login';
import {Box} from '@mui/material';
import {styled} from '@mui/material/styles';

function Login() {
    const PageContainer = styled(Box)(({theme})=>({
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
    }))
    return ( <PageContainer>
        <div style={{color: 'white'}}><strong>hi</strong></div>
        <LoginForm/>
        </PageContainer> );
}

export default Login;