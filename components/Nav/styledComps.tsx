import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import { Paper, ButtonGroup, Box } from '@mui/material';

export const Nav = styled(Paper)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 2,
    margin: 12,
    position: 'relative',
    right: 3,

}));
export const LinkGroup = styled(ButtonGroup)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    gap: 4
}));
export const GroupBoxMain = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'start',
    

}));
export const GroupBoxAuth = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'end'
}));