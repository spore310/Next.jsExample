import { GetStaticPaths, GetStaticProps } from 'next';
import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ParsedUrlQuery } from 'querystring';
import { Typography } from '@mui/material';
import {useRouter} from 'next/router';
interface IParams extends ParsedUrlQuery {
  id: string
}
const RickAndMorty = ({character}:any)=>{
    const router = useRouter();
    if(router.isFallback)return(<Typography variant='h1' component='div' color='white'>Loading...</Typography>);
    
    return(
    <>
    
    <Typography variant='h2' color='white'component='div'>{character?.name}</Typography>
    <Typography variant='body2' color='white' component='div'>{character?.created}</Typography>
    </>
    );

}

export const getStaticPaths:GetStaticPaths = async() =>{
  const {data:{results}} = await axios.get('https://rickandmortyapi.com/api/character');
  const paths = results.map((ele:any)=>{
    return{params:{id:ele.id.toString()}}
  });
  
  return{
    paths,
    fallback:true
}
}

export const getStaticProps:GetStaticProps = async({params})=>{
  const {id} = params as IParams
  const {data,status} = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
  if(status===200){
    
    return{
      props:{character: data},
      revalidate:10
    }
  }else{
    return{
      notFound:true
    }
  }

}
export default RickAndMorty;