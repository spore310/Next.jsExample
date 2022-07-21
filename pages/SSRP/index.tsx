import { Box, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {useRouter} from 'next/router';
import {styled } from '@mui/material/styles';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import CharacterCard from '../../components/SSRP/CharacterCard';
import styles from './SSRP.module.scss'
//import CardInfo from '../../components/SSRP/menuList';
//import { Container } from '../../components/SSRP/styledComps';
const SSRIndex = () =>{
    const [list, setList] = useState<Array<Object>>([])
    const [toggle, setToggle] = useState<boolean>(false)
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
    /*
    return(<Container>
        <ul>{list.map((ele:any)=>{
            const cardInfo = {id: ele.id, name:ele.name, image:ele.image, status: ele.status,species:ele.species}
            return <li key={ele?.id} onClick={()=>{handleClick(ele.id.toString())}}> <CardInfo  char={cardInfo}/></li>
            
        })}</ul>
    </Container>)
    */
    const GridIcon = styled(GridViewRoundedIcon)(({theme})=>({
        height:60,
        width:60,
        color:"white"
    }))
    const ListIcon = styled(ViewListRoundedIcon)(({theme})=>({
        height:60,
        width:60,
        color:"white"
    }))

   return (
    <>
        <button className={styles["btn-toggle"]} onClick={()=>setToggle(!toggle)}>
            {toggle ? <GridIcon /> : <ListIcon />}
        </button>
        <ul className={styles[toggle ? "grid-layout" : "list-layout"]}>
        {
            list.map((ele:any)=>
            {
                const cardInfo = {id: ele.id, name:ele.name, image:ele.image, status: ele.status,species:ele.species, episode: ele.episode}
                return <li className={styles.card} key={ele?.id} onClick={()=>{handleClick(ele.id.toString())}}> <CharacterCard  char={cardInfo}/></li>
            })
        }
        </ul>
    </>
   )
}
export default SSRIndex;