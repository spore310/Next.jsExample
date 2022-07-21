import * as React from 'react';
import { useState, useEffect } from 'react';
 import {styled} from '@mui/material/styles'
 import {Box} from '@mui/material';

 export const Container = styled(Box)(({theme})=>({
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid white',
    background: theme.palette.background.default,
    alignItems:'center',
    height:500,
    width:700,
    left:25,
    overflow: 'auto'
 }))