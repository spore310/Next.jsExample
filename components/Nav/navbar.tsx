import * as React from 'react';
import { useState, useEffect } from 'react';
import {Button} from '@mui/material';
import { Nav, LinkGroup, GroupBoxMain, GroupBoxAuth} from './styledComps';
import useSWR from 'swr'
import MyLink from './mylink';
import axios from 'axios';

import {useRouter} from 'next/router';
function NavBar() {
    const fetcher = (url:string) => axios.get(url).then()
    const {data:User, error,} = useSWR('http://localhost:3000/api/auth/secret', fetcher,{refreshInterval: 100});
    
    const router = useRouter();
    const handleLogout = async(e:any) =>{
        const {status} = await axios.delete('http://localhost:3000/api/auth/logout');

        if(status === 200){
            router.push('/login');
            
        }
    }
    return (<Nav elevation={3}>
        <GroupBoxMain>

            <LinkGroup variant='text' >
                <MyLink name={'Home'} url={'/'} />
                <MyLink name={'StaticPaths'} url={'/SSRP'} shouldPreFetch={false} />
                <MyLink name={'Static'} url={'/SSR'} />
                <MyLink name={'ISR'} url={'/ISR'} />
            </LinkGroup>

        </GroupBoxMain>
        <GroupBoxAuth>
            <LinkGroup variant='outlined' >
            {error?<MyLink name={'Login / Sign-Up'} url={'/login'}/>:<><MyLink name={'Profile'} url={`/profile`}/> <Button onClick={handleLogout}>Logout</Button></>}
            </LinkGroup>
        </GroupBoxAuth>
    </Nav>
    );
}

export default NavBar;