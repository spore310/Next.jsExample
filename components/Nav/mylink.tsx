import react, { FC } from 'react';
import Link from 'next/link'
import { alpha, styled } from '@mui/material/styles';
import { Button } from '@mui/material';

interface Props{
    url:string;
    name:string;
    shouldPreFetch?:boolean;
    disabled?:boolean;
}
const MyLink: FC<Props> = ({ url, name, shouldPreFetch , disabled}) => {

    const StyledButton = styled(Button)(({theme})=>({
        
    }))
    return (
        <Link href={url} prefetch={shouldPreFetch} passHref>
            <StyledButton disabled={disabled}>{name || url.split("").splice(1).join("")}</StyledButton>
        </Link>
    );
}
export default MyLink; 