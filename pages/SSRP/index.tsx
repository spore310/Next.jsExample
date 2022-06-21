import { Box, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {useRouter} from 'next/router';
import CardInfo from '../../components/SSRP/menuList';
import { Container } from '../../components/SSRP/styledComps';
const SSRIndex = () =>{
    const [list, setList] = useState<Array<Object>>([])
    const router = useRouter();
    const getData = async()=>{
        const {data:{results}} = await axios.get('https://rickandmortyapi.com/api/character/');
        return results
    }
    const handleClick = (target:string)=>{
        router.push(`/SSRP/${target}`)
    }
    useEffect(()=>{
        getData().then(res=>setList(res));
    },[])
    return(<Container>
        <ul>{list.map((ele:any)=>{
            const cardInfo = {id: ele.id, name:ele.name, image:ele.image, status: ele.status,species:ele.species}
            return <li key={ele?.id} onClick={()=>{handleClick(ele.id.toString())}}> <CardInfo  char={cardInfo}/></li>
            
        })}</ul>
    </Container>)
}
export default SSRIndex;