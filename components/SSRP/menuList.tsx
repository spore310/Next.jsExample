import * as React from 'react';
import { useState, useEffect } from 'react';
import {Paper} from '@mui/material';
import {styled} from '@mui/material/styles';

function ListItem({char, routeTo}:any) {
    const Card = styled(Paper)(({theme})=>({
        displat:'flex',
        height:'fit-content',
        width:'fit-content',
        padding:4,
        margin:6,
        marginBottom:4,
        borderRadius:25,
       
        '&:hover':{
            cursor:'pointer'
        },
        '&>li':{
           
        }
    }))
    
    return (<Card elevation={3}>
        <div>{char.name}</div>
    </Card>);
} 

export default ListItem; 