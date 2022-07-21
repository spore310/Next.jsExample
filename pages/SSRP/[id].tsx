import { GetStaticPaths, GetStaticProps } from 'next';
import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ParsedUrlQuery } from 'querystring';
import { Typography } from '@mui/material';
import {useRouter} from 'next/router';
import Image from 'next/image';
interface IParams extends ParsedUrlQuery {
  id: string
}
const RickAndMorty = ({character}:any)=>{
    const router = useRouter();
    if(router.isFallback)return(<Typography variant='h1' component='div' color='white'>Loading...</Typography>);
    
    const episodeIDS:number[] = character.episode.map((ep:string)=>ep.slice(40));
    
    return(
    <>
    
    <Typography variant='h2' color='white'component='div'>Name: {character?.name}</Typography>
    <Image src={character.image} width={100} height={100} alt='Rick And Morty Avatar Image'/>
    
    {episodeIDS.map((ep:number,index:number)=><Typography variant='body2' color='white' component='div' key={index}>Episode: {ep}</Typography>)}
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