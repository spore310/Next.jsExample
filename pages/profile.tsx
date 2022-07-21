import * as React from 'react';
import { useState, useEffect, FC } from 'react';
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import axios from 'axios';
import {PageContainer} from '../components/profile/styledComps';
import { Typography } from '@mui/material';
import {client} from '../apollo-client';
import { gql } from "@apollo/client";
interface myProps{ 
    rick?:string;
}
const Profile:FC<myProps> = ({rick}) =>{



return (
    <PageContainer>
  <Image
    src={`${rick}`}
    alt="Picture of a dog"
    quality={100}
    width={250}
    height={250}
  />
  <Typography variant='h2' component='span' color='white'>Welcome Admin!</Typography>
  <Typography variant='body1' component='span' color='white'>Here is a free photo Rick!</Typography>
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
    const {data:{character:{image}}} = await client.query({
        query: gql`
        query getRick($id:ID!){
            character(id: $id){
                image
            }
        }
        `,
        variables:{id:1}
    });
    return{
        props:{
            rick:image
        }
    }
}

export default Profile;