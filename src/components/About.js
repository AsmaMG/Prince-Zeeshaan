import React, { Component } from 'react';
import {Grid,Typography,Box,Breadcrumbs}  from '@material-ui/core';
import zeepic from '../../src/images/zeeshaan.png'
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';
import {Link} from 'react-router-dom'


class About extends Component {
    render() {
        return (
            <div className="container">

{/* <Box>
<Breadcrumbs  className="breadcrums" >
      <Link  to="/" onClick={this.handleClick} className="breadcrums">
      Home
      </Link>
      <Link  to="/gallery" onClick={this.handleClick} className="breadcrums">
      Gallery
      </Link>
      <Link
      className="breadcrums"
        // href="/components/breadcrumbs/"
        onClick={this.handleClick}
        aria-current="page"
      >
       All Pics
      </Link>
    </Breadcrumbs></Box> */}

<Box ml={24}>
            {/* <Grid container> */}
           
            {/* </Grid> */}
           <Grid container>
             <Grid item xs={12} md={4}>
               <img src={zeepic} style={{paddingLeft:10}} />
              </Grid>


               <Grid item xs={12} md={8}>
         
                <Typography variant="h4" style={{color:"#006280"}}><b>About</b>
                </Typography> <br></br>
               <Box > <Typography variant="h6">Iam a elder brother in our family.Iam studying in 4th standard in ABC school.I have one youngest brother ,2 nephews and one niece .All are very cute .
                </Typography> </Box>

             
             
          
               <Box mt={-0}><Typography variant="h5" style={{color:"#006280"}}><b>Iam a Super hero in my family</b></Typography></Box>

         <Box display="flex" flexDirection="column" >
               <Box display="flex" flexDirection="row" mt={2} justifyContent="space-between">
               <Typography variant="h6">
               <NavigateNextRoundedIcon style={{color:"#44c9f1eb"}}/>
              <b>Birthday:</b> 23rd June 
              </Typography>
               <Typography variant="h6" style={{marginRight:"90px"}}>
               <NavigateNextRoundedIcon style={{color:"#44c9f1eb"}}/>
               <b>Age:</b> 10 years
               </Typography>
               </Box>
                

  <Box display="flex" flexDirection="row"   mt={1} justifyContent="space-between" >
           <Typography variant="h6">
              <NavigateNextRoundedIcon style={{color:"#44c9f1eb"}}/>
              <b>Class:</b> 5th standard 
                </Typography> 
              <Typography variant="h6" style={{marginRight:"30px"}}>
               <NavigateNextRoundedIcon style={{color:"#44c9f1eb"}}/>
              <b>Phone:</b> 9877777777
                </Typography>
                </Box>


                <Box display="flex" flexDirection="row" mt={1} justifyContent="space-between" >
           <Typography variant="h6">
              <NavigateNextRoundedIcon style={{color:"#44c9f1eb"}}/>
             <b>City:</b> Bangalore
               </Typography>
             <Typography variant="h6" style={{marginRight:"70px"}}>
               <NavigateNextRoundedIcon style={{color:"#44c9f1eb"}}/>
              <b>State:</b>Karnataka
                </Typography>
                </Box>
               </Box>
            
             
            </Grid>

              </Grid>
              </Box>
            </div>
        );
    }
}

export default About;