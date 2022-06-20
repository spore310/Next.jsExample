import * as React from 'react';
import { useState, useEffect, FC } from 'react';
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import axios from 'axios';
import {PageContainer} from '../components/profile/styledComps';
import { Typography } from '@mui/material';
interface myProps{ 
    dog?:string;
}
const Profile:FC<myProps> = ({dog}) =>{



return (
    <PageContainer>
  <Image
    src={`${dog}`}
    alt="Picture of a dog"
    quality={100}
    width={250}
    height={250}
  />
  <Typography variant='h2' component='span' color='white'>Welcome Admin!</Typography>
  <Typography variant='body1' component='span' color='white'>Here is a free photo of a random dog!</Typography>
  </PageContainer>
    );

}

export const getServerSideProps:GetServerSideProps = async({req,res}) =>{
    
  
    if(req.cookies?.antraAuth === undefined){
        return{redirect: {
            destination: '/login',
            permanent: false,
          },}
    }
    const {message} = await axios.get('https://dog.ceo/api/breeds/image/random').then(res=>res.data)
    console.log(message);
    return{ 
        props:{
            dog:message
        }
    }
}

export default Profile;