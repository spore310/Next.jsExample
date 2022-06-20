import { Typography } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {useRouter} from 'next/router';
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
    return(<ul>{list.map((ele:any)=>{
        return <li key={ele?.id}>
            <Typography 
            variant='body1' 
            component='span' 
            color='white' 
            onClick={()=>handleClick(ele.id.toString())}
            sx={{'&:hover':{cursor:'pointer'}}}
            >
                {ele.name}

            </Typography>
        </li>
    })}</ul>)
}
export default SSRIndex;