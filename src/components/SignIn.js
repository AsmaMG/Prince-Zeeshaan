
import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import person from '.././signinPics/man1.jpg'
import {signInWithGoogle} from '../firebase/firebase'
import { Card } from '@material-ui/core';

class SignIn extends Component {
     gotoSignin=()=>{
      
  this.props.history.push({
  pathname:"/home"
  })
  }
    render() {
        return (
            <Card>
            <Box m={20} mt={10}>
            <Grid container >
        <Grid item xs={12} md={4}  >
         {/* <CssBaseline /> */}
     
        {/* <Avatar className={classes.avatar}> */}
        <Box display="flex" flexDirection="column" align="center">
        <Box >
          <AccountCircleIcon  style={{width:"100px",height:"50px"}} color="primary"/></Box>
        {/* </Avatar> */}
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        </Box>
        {/* <form className={classes.form} > */}
        <form autoComplete="off">
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            // autoComplete="email"
            autoFocus
          />
       <Box mt={3}>
          <TextField
           variant="standard"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
         
          /></Box>
         <Box mt={3}>
          <Button
         
            fullWidth
            variant="contained"
            color="primary"
            // className={classes.submit}
            // className={classes.submit}
            onClick={this.gotoSignin}
            // onClick={signInWithGoogle}
          >
            Sign In
          </Button></Box>
          <Grid container >
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"reset password"}
              </Link>
            </Grid>
          </Grid>
        </form>

        </Grid>
        <Grid item xs={12} md={2}></Grid>
        <Grid item xs={12} md={6}>
            <img
            src={person}
            height="90%"
            width="100%"
            
            >

            </img>
            </Grid>
    </Grid>
                
            </Box>
            </Card>
        );
    }
}

export default SignIn;