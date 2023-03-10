import React from 'react'
import { Link } from "react-router-dom";

// mui
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';



const StyledBreadcrumb = styled(Chip)(({ theme }) => {
   const backgroundColor =
      theme.palette.mode === 'light'
         ? theme.palette.grey[100]
         : theme.palette.grey[800];
   return {
      backgroundColor,
      height: theme.spacing(3),
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightRegular,
      '&:hover, &:focus': {
         backgroundColor: emphasize(backgroundColor, 0.06),
      },
      '&:active': {
         boxShadow: theme.shadows[1],
         backgroundColor: emphasize(backgroundColor, 0.12),
      },
   };
}); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(event) {
   event.preventDefault();
   console.info('You clicked a breadcrumb.');
}

export default function AppNav() {
   return (
      <div className='nav' role="presentation" onClick={handleClick}>
         <Breadcrumbs aria-label="breadcrumb">
            <Link to="/">
               <StyledBreadcrumb
                  href="/"
                  label="Home"
                  icon={<HomeIcon fontSize="small" />}
               />
            </Link>
            <Link to="/game">
               <StyledBreadcrumb label="Game" />
            </Link>
         </Breadcrumbs>
      </div>
   );
}
