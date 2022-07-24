import { useQuery, gql } from "@apollo/client";
import React from 'react';
import Typography from '@mui/material';
const Query = gql`
    query GetCharacterList($pageNum: Int){
        characters(page:$pageNum){
            results{
              name,
              type
            }
          }
    }
`;

export default function GetCharacterList():any{
    const {data, loading, error} = useQuery(Query,{
        variables:{pageNum:2}
    });
    if(loading){
        console.log('loading');
    }
    if(data){
        console.log(data)
    }
    if(error){
        console.log(error);
    }
    return(<div></div>)
}