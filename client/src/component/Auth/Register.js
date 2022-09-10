import React, { useState } from 'react'
import styled from '@emotion/styled';
import { Container, Grid, Paper, TextField, Stack, Button, Box, Typography, Alert } from '@mui/material';
import HowToRegSharpIcon from '@mui/icons-material/HowToRegSharp';
import Logo from './../../assets/images/jamun.webp'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import useForm from '../../helpers/FormValidation';


const Stac = styled.div`
background:linear-gradient(rgba(255,255,255,0.2),rgba(255,255,255,0.6)),url(${Logo});
//background-image:url(${Logo});
height:80vh;
background-repeat: no-repeat;
background-size: cover;
`;

function Register(props) {
  const [user,setUser] = useState({
    email:"",
    password:"",
    name:"",
    mobile:""
  }) 

  const navigate = useNavigate();
  const {errors, validate} = useForm()

  const readValue = (e) =>{
    const { name, value } = e.target;
    validate(name, value)
    setUser({...user, [name]:value})
  }

  const submitHandler = async(e)=>{
    e.preventDefault();
    try{
      await axios.post(`/api/v1/auth/register`,user).then(res =>{
        toast.success("user registered successfully")
        navigate('/')
      }).catch(err => toast.error(err.response.data.msg));
    }catch(error){
      toast.error(error.response.data.msg)
    }
  }


  return (
    <Container>
      <Grid container sx={{display:'flex',justifyContent:'center',my:3}} >
        <Grid item xs={12} md={6}>
         <Paper elevation={10}>
          <Stac>
          <Stack component='form' onSubmit={submitHandler} spacing={2} sx={{padding:2, color:''}}>
            <Box sx={{flexGrow:1,display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
              <Typography variant="h4">
                Register
              </Typography>
              <HowToRegSharpIcon color='warning' fontSize='large'/>
            </Box>
            <TextField color="warning" label="Name" type="text" name='name' value={user.name} onChange={readValue} />
            {
                      errors && errors.name ? (
                        <Alert severity='error'sx={{m:0, p:0}}>{errors.name}</Alert>
                      ): null
                    }
            <TextField color="warning" label="Email" type="email" name='email' value={user.email} onChange={readValue} />
            {
                      errors && errors.email ? (
                        <Alert severity='error'>{errors.email}</Alert>
                      ): null
                    }
            <TextField color="warning" label="Mobile" type="number" name='mobile' value={user.mobile} onChange={readValue} />
            {
                      errors && errors.mobile ? (
                        <Alert severity='error'>{errors.mobile}</Alert>
                      ): null
                    }
            <TextField color="warning" label="Password" type='password' name='password' value={user.password} onChange={readValue} />
            {
                      errors && errors.password ? (
                        <Alert severity='error'>{errors.password}</Alert>
                      ): null
                    }
            <Box sx={{display:'flex',justifyContent:'center'}}>
              <Button type='submit' color='warning' variant='contained'>Sign Up</Button>
            </Box>
          </Stack>
          </Stac>
         </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Register