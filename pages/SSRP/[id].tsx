import { GetStaticPaths, GetStaticProps } from 'next';
import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ParsedUrlQuery } from 'querystring';
import { Typography } from '@mui/material';
import {useRouter} from 'next/router';
import Image from 'next/image';
import {client} from '../../apollo-client';
import {gql} from '@apollo/client';
interface IParams extends ParsedUrlQuery {
  id: string
}
const RickAndMorty = ({character}:any)=>{
    const router = useRouter();
    if(router.isFallback)return(<Typography variant='h1' component='div' color='white'>Loading...</Typography>);
    
    
    return(
    <>
    
    <Typography variant='h2' color='white'component='div'>Name: {character?.name}</Typography>
    <Image src={character.image} width={100} height={100} alt='Rick And Morty Avatar Image'/>
    <Typography variant='body1' color='white' component='div'>Gender: {character?.gender}</Typography>
    <Typography variant='body1' color='white' component='div'>Spieces: {character?.species}</Typography>
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
  const {data} = await client.query({
    query: gql`
    query getCharacterInfo($char:ID!) {
      character(id:$char){
        id,
        name,
        gender,
        status,
        species,
        type,
        image,
        location{
          name,
          dimension
        },
        origin{
          name,
          dimension
        },
        episode{
          name,
          episode
        }
      }
    }
    `,
    variables:{char: id}
  })
  if(data?.character){
    
    return{
      props:{character: data.character},
      revalidate:10
    }
  }else{
    return{
      notFound:true
    }
  }

}
export default RickAndMorty;