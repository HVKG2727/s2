import styled from '@emotion/styled';
import { Box, Typography, Stack, Container, Grid, Button, Divider, IconButton } from '@mui/material';
import React from 'react'
import Footerimage from '../../assets/images/m1.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Banner = styled.div`
background:linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.4),rgba(255,118,2,0.2)),url(${Footerimage});
height:100%;
background-repeat: no-repeat;
background-size: cover;

`;

const FooterStyle = () => {
  return (
    <>
    <Banner>
        <Container sx={{py:8}}>
            <Grid container spacing={2} sx={{display:'flex',justifyContent:'center'}}>

            <Grid item xs={12} md={3} sx={{color:'white', textAlign:{xs:'center',md:'left'}}}>
                    <Typography variant='h6'><Divider><center>Follow Us</center></Divider></Typography>
                    <IconButton sx={{color:'white', border: '2px solid black' ,borderRadius: '50%', backgroundColor: 'blue' ,margin: '10px'}}>
                        <FacebookIcon/>
                    </IconButton> 
                    <IconButton sx={{color:'white',  border: '2px solid black' ,borderRadius: '50%', backgroundColor: '#C13584' , margin: '10px'}}>
                        <InstagramIcon/>
                    </IconButton> 
                    <IconButton sx={{color:'white',  border: '2px solid black' ,borderRadius: '50%', backgroundColor: 'skyblue', margin: '10px'}}>
                        <TwitterIcon/>
                    </IconButton> 
                    <IconButton sx={{color:'white',  border: '2px solid black' ,borderRadius: '50%', backgroundColor: 'red', margin: '10px'}}>
                        <YouTubeIcon/> 
                    </IconButton> 
                    
                </Grid>        
                {/* <Grid item xs={10}>
                    <Typography variant='h6' color="white" sx={{textAlign:'center'}}>Want to Partner with us??</Typography>
                </Grid>
                <Grid item xs={10}>
                    <Typography color="white" sx={{textAlign:'center'}}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id hic, ex aspernatur iusto error corporis omnis itaque ullam nemo eum temporibus optio nihil eos architecto corrupti, laboriosam rerum et quae.  </Typography>
                </Grid>
                <Grid item xs={10} sx={{display:'flex',justifyContent:'center'}}>
                    <Button variant='contained' color='warning' > Get Started </Button>
                </Grid> */}

               
            </Grid>

            <Divider color="white" sx={{paddingY:'1px',marginY:'20px'}}/>

            <Grid container spacing={3} sx={{display:'flex',  justifyContent:{xs:'flex-start',md:'center'}}}>
                <Grid item xs={6} sm={3} md={2} sx={{color:'white'}}>
                    <Typography variant='h6'> Support </Typography>
                    <Typography variant="subtitle1">Get Help</Typography>
                    <Typography variant="subtitle1">Feedback</Typography>
                    <Typography variant="subtitle1">Contact us</Typography>
                    <Typography variant="subtitle1">Privacy Policy</Typography>
                </Grid >        
                <Grid item xs={6} sm={3} md={2} sx={{color:'white'}}>
                    <Typography variant='h6'> Legal </Typography>
                    <Typography variant="subtitle1">Terms and Condition</Typography>
                    <Typography variant="subtitle1">Privacy Policy</Typography>
                    <Typography variant="subtitle1">Disclaimer</Typography>
                    <Typography variant="subtitle1">Caution notice</Typography>
                </Grid>
                <Grid item xs={6} sm={3} md={2} sx={{color:'white'}}>
                    <Typography variant='h6'> Terms </Typography>
                    <Typography variant="subtitle1">Terms and Condition</Typography>
                    <Typography variant="subtitle1">Privacy Policy</Typography>
                    <Typography variant="subtitle1">Disclaimer</Typography>
                    <Typography variant="subtitle1">Caution notice</Typography>
                </Grid>         
                {/* <Grid item xs={6} sm={3} md={2} sx={{color:'white'}}>
                    <Typography variant='h6'>ABC India</Typography>
                    <Typography variant="subtitle1">About</Typography>
                    <Typography variant="subtitle1">Care</Typography>
                    <Typography variant="subtitle1">Careers</Typography>
                    <Typography variant="subtitle1">Our Golden Past</Typography>
                </Grid> */}

                     

            </Grid>

            <Divider color="white" sx={{paddingY:'1px',marginY:'20px'}}/>

            <Grid container spacing={2} sx={{color:'white'}}>
                <Grid item xs={12} md={12} sx={{display:'flex',justifyContent:{xs:'center',md:'center'}}}>
                    <Typography variant='p'>Copyright © <span style={{color: 'blue'}}>P@V </span>Corporation 2022 All Rights Reserved</Typography>
                </Grid>

                {/* <Grid item xs={12} md={6} sx={{display:'flex',justifyContent:{xs:'center',md:'flex-end'}}}>
                    <Typography variant='p' color='blue'>Privacy Policy</Typography>
                </Grid> */}
            </Grid>

            

        </Container>
    </Banner>
    </>
  )
}

export default FooterStyle

    
