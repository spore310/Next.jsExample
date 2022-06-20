import React, {FC, useState, useEffect} from 'react';
import {Box, Paper,Card,TextField, Stack, Button, FormControlLabel, FormGroup, Typography} from '@mui/material'
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import {useRouter} from 'next/router';
import {StyledContainer, StyledBox, Avatar, MyCheckbox, validation, initVal} from './styledComps'
const LoginForm:FC = () =>{

 const [loading, setLoading] = useState<boolean>(false);
 const [errorMessage, setErrorMessage] = useState<string>('');
 const router = useRouter();

 return( 
<StyledContainer elevation={6}>   
       <Formik initialValues={initVal} validationSchema={validation} onSubmit={async(values,{setSubmitting})=>{
            setLoading(true)
            const {username, password} = values;
            try{
            const {data, status} = await axios.post('/api/auth/login',{username,password});
            
               if(status === 200){
                  router.push('/profile');
                  setErrorMessage('');
                  
               }
            }catch(e:any){
               setErrorMessage(e?.response?.data?.message);
               
            }
            setSubmitting(false);
            setLoading(false);
       }}>
       {({isSubmitting, touched, values,errors,isValidating, handleChange, handleBlur})=>(
           <Form>
<Stack spacing={2} justifyContent="center" alignItems='center'>
                  <Avatar/>
               <StyledBox >
               <TextField type='text'
               variant='outlined'
               name='username' 
               label='Username' 
               disabled={loading}
               value={values.username} 
               error={touched.username && Boolean(errors.username)} 
               helperText={touched.username && errors.username}
               onBlur={handleBlur} 
               onChange={handleChange}
               />
               <TextField type='password'
               variant='outlined'
               name='password' 
               label='Password' 
               disabled={loading}
               value={values.password} 
               error={touched.password && Boolean(errors.password)} 
               helperText={touched.password && errors.password}
               onBlur={handleBlur} 
               onChange={handleChange}
               />
       </StyledBox>   
               
       <FormGroup>
          <FormControlLabel sx={{position:'relative', left:-45}} label={`I agree to online terms and conditions ${loading}`} control={<MyCheckbox name='check'checked={values.check} onChange={handleChange} disabled={loading}/>}></FormControlLabel>
      
      </FormGroup>
       <Button sx={{width:1}} type="submit" variant='contained' color='secondary'>submit</Button>
       <Typography variant='body1' color='error'>{errorMessage}</Typography>
       </Stack>
           </Form>
       )}
       </Formik>
</StyledContainer>
 );
}

export default LoginForm;