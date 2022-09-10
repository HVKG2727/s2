import React, {useState} from 'react'
import styled from '@emotion/styled';
import { Container, Grid, Paper, TextField, Stack, Button, Box, Typography, Alert } from '@mui/material';
import KeySharpIcon from '@mui/icons-material/KeySharp';
import Logo from './../../assets/images/m2.jpg'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import useForm from '../../helpers/FormValidation';

const Stac = styled.div`
background:linear-gradient(rgba(0,0,0,0.5),rgba(255,255,255,0.5)),url(${Logo});
//background-image:url(${Logo});
height:50vh;
background-repeat: no-repeat;
background-size: cover;
`;

function Login(props) {
  const [user,setUser] = useState({
    email:"",
    password:"",
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
      await axios.post(`/api/v1/auth/login`,user).then(res =>{
        toast.success("login successful")
        localStorage.setItem('loginToken', true)
        navigate('/')
        window.location.reload();
      }).catch(err => toast.error(err.response.data.msg));
    }catch(error){
      toast.error(error.response.data.msg)
    }
  }


  return (
    <Box>
    <Container sx={{marginTop: '0px' }}>
      <Grid  container sx={{display:'flex',justifyContent:'center',my:0}} >
        <Grid item xs={12} md={6} sx={{marginTop: '80px' }}>
         <Paper elevation={10}  >
          <Stac >
          <Stack component='form' autoComplete='off' onSubmit={submitHandler} spacing={2} sx={{padding:2 }}>
            <Box sx={{flexGrow:1,display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
              <Typography variant="h4">
                Login
              </Typography>
              <KeySharpIcon color='success' fontSize='large'/>
            </Box>
                <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
              <TextField sx={{ marginBottom:'10px',color:'black'}} color="success" label="Email" type='email' name='email' value={user.email} onChange={readValue} />
              {
                      errors && errors.email ? (
                        <Alert severity='error'>{errors.email}</Alert>
                      ): null
                    }
              <TextField  color="success" label="Password" type='password' name='password' value={user.password} onChange={readValue} />
              {
                      errors && errors.password ? (
                        <Alert severity='error'>{errors.password}</Alert>
                      ): null
                    }
              </Box>
              <Box sx={{display:'flex',justifyContent:'center', marginTop:'10px'}}>
                <Button type='submit' color='success' variant='contained'>Login</Button>
              </Box>

          </Stack>
          </Stac>
         </Paper>
        </Grid>
      </Grid>
    </Container>
    </Box>
  )
}

export default Login