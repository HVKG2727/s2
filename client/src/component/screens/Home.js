import React from "react";
import {
  Box,
  Card,
  Button,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Style from "./Style";
import Chick from "./../../assets/images/s4.webp";
// import Chickencard from "../../assets/images/s1.jpg";
import OrderOnline from "../../assets/images/s1.jpg";
import NightDine from "../../assets/images/s1.jpg";
import Dinein  from "../../assets/images/s1.jpg";

//browse cat photos
// import Bc1  from "../../assets/images";
// import Bc2  from "../../assets/images";
// import Bc3  from "../../assets/images";
// import Bc4  from "../../assets/images";
// import Bc5  from "../../assets/images";
// import Bc6  from "../../assets/images";

import { Link,NavLink } from "react-router-dom";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Style />
      {/* <Container>
        <Grid container spacing={4} py={5}>
          <Grid item xs={12} sm={4} md={4}>
            <Card sx={{borderRadius:'20px'}}>
              <CardMedia component="img" height='200px' image={OrderOnline}/>
              <CardContent>
                <Typography variant='h6'>Order Online</Typography>
                <Typography variant='p' color='gray'>Stay Home and Order to your Doorstep</Typography>
              </CardContent>
            </Card>
        </Grid>

          <Grid item xs={12} sm={4} md={4}>
            <Card sx={{borderRadius:'20px'}}>
              <CardMedia component="img" height='200px' image={Dinein}/>
              <CardContent>
                <Typography variant='h6'>Come and feel the taste</Typography>
                <Typography variant='p' color='gray'>Chill and enjoy our Ambience</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4} md={4}>
            <Card sx={{borderRadius:'20px'}}>
              <CardMedia component="img" height='200px' image={NightDine}/> 
              <CardContent>
                <Typography variant='h6'>NightLife and Clubs</Typography>
                <Typography variant='p' color='gray'>Explore the city's top nightlife outlets</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        
      </Container> */}
         <Container margin='20px'>
        <Box margin='30px' align='center'>
        <Button  component={Link} to={"/Menu"}variant='contained' color='warning' > Click To order </Button>
        </Box>
        <Grid item xs={12} sm={6} md={3} margin='20px'>
            <Card component={Link} to={"/Menu"} sx={{ textDecoration: "none" }}>
              <CardMedia component="img" image={Chick} />
              <CardContent sx={{background:'rgb(20,20,10)'}}>
                <Typography align="center" color='white'><Button variant='contained' color='warning'>SELECT</Button></Typography>
              </CardContent>
            </Card>
          </Grid>
          
      </Container>


      {/* <Container>
        <Box
        sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: "center",
            paddingTop:'80px',
        }}
        >
        <Typography
            component="h4"
            variant="h4"
            sx={{ textTransform: "uppercase" }}
        >
            Browse Categories
        </Typography> 
        </Box>

        <Divider color='black' sx={{mt:2,mb:4}} />

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ borderRadius:'20px' }}>
              <CardMedia component="img" sx={{height:'200px'}} image={Bc1} />
              <CardContent sx={{ background:'rgb(240,230,140)' }}>
                <NavLink  to={"/Menu"} style={{textDecoration:'none','&:hover':{color:'black'}}}>
                <Typography sx={{color:"black",textAlign:'center'}}>HOT DEALS</Typography>
                </NavLink>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ borderRadius:'20px' }}>
              <CardMedia component="img" sx={{height:'200px'}} image={Bc2} />
              <CardContent sx={{ background:'rgb(240,230,140)' }}>
              <NavLink  to={"/Menu"} style={{textDecoration:'none','&:hover':{color:'black'}}}>
                <Typography sx={{color:"black",textAlign:'center'}}>CHICKEN BUCKET</Typography>
                </NavLink>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ borderRadius:'20px' }}>
              <CardMedia component="img" sx={{height:'200px'}} image={Bc3} />
              <CardContent sx={{ background:'rgb(240,230,140)' }}>
              <NavLink  to={"/Menu"} style={{textDecoration:'none','&:hover':{color:'black'}}}>
                <Typography sx={{color:"black",textAlign:'center'}}>BURGER</Typography>
                </NavLink>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card  sx={{ borderRadius:'20px' }}>
              <CardMedia component="img" sx={{height:'200px'}} image={Bc4} />
              <CardContent sx={{ background:'rgb(240,230,140)' }}>
              <NavLink  to={"/Menu"} style={{textDecoration:'none','&:hover':{color:'black'}}}>
                <Typography sx={{color:"black",textAlign:'center'}}>PIZZA</Typography>
                </NavLink>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card  sx={{ borderRadius:'20px' }}>
              <CardMedia component="img" sx={{height:'200px'}} image={Bc5} />
              <CardContent sx={{ background:'rgb(240,230,140)' }}>
              <NavLink  to={"/Menu"} style={{textDecoration:'none','&:hover':{color:'black'}}}>
                <Typography sx={{color:"black",textAlign:'center'}}>SNACKS</Typography>
                </NavLink>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card  sx={{ borderRadius:'20px' }}>
              <CardMedia component="img" sx={{height:'200px'}} image={Bc6} />
              <CardContent sx={{background:'rgb(240,230,140)'}}>
              <NavLink  to={"/Menu"} style={{textDecoration:'none','&:hover':{color:'black'}}}>
                <Typography sx={{color:"black",textAlign:'center'}}>HOT LAUNCHES</Typography>
                </NavLink>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container> */}

      <Footer/>

    </>
  );
}

export default Home;
