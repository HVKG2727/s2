import styled from '@emotion/styled';
import { Box, Typography, Stack } from '@mui/material';
import React from 'react'
import Logo from './../../assets/images/m2.jpg'


const Banner = styled.div`
background:linear-gradient(rgba(0,0,0,0),rgba(255,255,255,0)),url(${Logo});
height:100vh;
background-repeat: no-repeat;
background-size: cover;
`;

const Style = () => {
  return (
    <>
    <Banner>
      
      <Box sx={{width:{xs:'100%',md:'500px'},textAlign:'center',paddingTop:'100px'}} >
        <Typography  color='tomato' variant='h4'>Sweets..!!</Typography>
        <Typography color='gray' variant='h2'>Taste the melocious sweets and make your life sweet with our sweets</Typography>
      </Box>
      
    </Banner>
    </>
  )
}

export default Style


// export const Image = styled(Box)(() => ({}))

// const Image = styled(Box)(() => ({}))

//cont theme = createTheme({})