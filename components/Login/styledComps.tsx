import {Box, Paper,Card,TextField, Stack, Button,Checkbox} from '@mui/material';
import {styled } from '@mui/material/styles';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import * as yup from 'yup';
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
 export const StyledBox = styled(Box)(({theme})=>({
    padding:2,
    height:'fit-content',
    width: 'fit-content',
    
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
 }))

 export const Avatar = styled(AccountCircleSharpIcon)(({theme})=>({
    height:60,
    width:60
 }));

 export const MyCheckbox = styled(Checkbox)(({theme})=>({
   
 }))
 export const initVal = {
    username:"",
    password:"",
    check:false
 }
 export const validation = yup.object({
    username:yup.string().min(1,'').required(),
    password:yup.string().min(3,'').required(),
    check:yup.boolean().oneOf([true],'Must Click to Flex!')
 })