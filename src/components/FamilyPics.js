import { Grid } from '@material-ui/core';
import { Box,  Typography } from '@material-ui/core';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import f1 from "../familyPics/f1.jpeg";
import f2 from "../familyPics/f2.jpeg";
import f3 from "../familyPics/f3.jpeg";
import f4 from "../familyPics/f4.jpeg";
import f5 from "../familyPics/f5.jpeg";
import f6 from "../familyPics/f6.jpeg";
import f7 from "../familyPics/f7.jpeg";
import f8 from "../familyPics/f8.jpeg";
import f9 from "../familyPics/f9.jpeg";
import f10 from "../familyPics/f10.jpeg";
import f11 from "../familyPics/f11.jpeg";
import f12 from "../familyPics/f12.jpeg";
import f13 from "../familyPics/f13.jpeg";
import f14 from "../familyPics/f14.jpeg";



import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Zoom from '@material-ui/core/Zoom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Fab from '@material-ui/core/Fab';
import AttachmentIcon from '@material-ui/icons/Attachment';
import AddIcon from '@material-ui/icons/Add';
import { IconButton } from '@material-ui/core';

class FamilyPics extends Component {

constructor(props)
{
    super(props);
this.state={
    showImage:false,
}
}

    //  handleClick=(event) =>{
    //     event.preventDefault();
    //     console.info('You clicked a breadcrumb.');
    //   }
      onclickImage=()=>{
          this.props.history.push({
              pathname:"/firstImage"
          })
      }

    render() {

        const openImage=()=>{
          this.setState({
              showImage:true,
          })
        }

        return (
            <div className="container">
<Box ml={24}>
<Box mb={2} >
<Breadcrumbs   >
      <Link  to="/home"  className="breadcrums">
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
    </Breadcrumbs></Box>

<Box height="">
                <Box className="" flex="wrap" justifyContent="space-evenly" >
         
         {/* <a className="gallLink" href="#" >   <img 
               src={a}
                    
                     width="300px"
                     height="300px"
          /></a> */}
        
         <Box  className="frame" >
         <a className="gallLink" href="#" onClick={this.openImage} >
         <IconButton  onClick={this.onclickImage}> 
            <img 
               src={f1}
                    
                     width="130px"
                     height="200px"
                     
                     
          /></IconButton>

                 {/* {this.state.showImage?"hello":<Box className="imagebox">
    
        <Box display="flex" flexDirection="row" justifyContent="space-between"> 
      
 <AddIcon color="primary"/>

      <AttachmentIcon color="primary"/></Box>
         </Box>} */}
          </a>
   
         </Box>
         

         <Box className="frame" ml={3}>
         <a href="#" >  
         <IconButton  onClick={this.onclickImage}>  
         <img 
               src={f2}
                    
               width="130px"
                     height="200px"
          /></IconButton>
          </a>
          </Box>
         
          <Box className="frame" ml={3}>
         <a href="#" >  
         <IconButton  onClick={this.onclickImage}> 
          <img 
               src={f8}
                    
               width="400px"
                     height="200px"
          /></IconButton>
          </a>
          </Box>
          <Box className="frame">
         <a href="#" >  
         <IconButton  onClick={this.onclickImage}> 
          <img 
               src={f4}
                    
               width="130px"
                     height="200px"
          /></IconButton>
          </a>
          </Box>
          <Box className="frame" ml={3}>
         <a href="#" > 
         <IconButton  onClick={this.onclickImage}> 
           <img 
               src={f5}
                    
               width="130px"
                     height="200px"
          /></IconButton>
          </a>
        
         </Box>
         <Box className="frame" ml={3}>
         <a href="#" > 
         <IconButton  onClick={this.onclickImage}> 
           <img 
               src={f6}
                    
               width="130px"
                     height="200px"
          /></IconButton>
          </a>
        
         </Box>
         <Box className="frame" ml={3}>
         <a href="#" > 
         <IconButton  onClick={this.onclickImage}> 
           <img 
               src={f7}
                    
               width="130px"
                     height="200px"
          /></IconButton>
          </a>
        
         </Box>
         <Box className="frame" ml={3}>
         <a href="#" > 
         <IconButton  onClick={this.onclickImage}> 
           <img 
               src={f3}
                    
               width="130px"
                     height="200px"
          /></IconButton>
          </a>
        
         </Box>

         <Box className="frame" ml={3}>
         <a href="#" > 
         <IconButton  onClick={this.onclickImage}> 
           <img 
               src={f9}
                    
               width="130px"
                     height="200px"
          /></IconButton>
          </a>
        
         </Box>

         <Box className="frame" ml={3}>
         <a href="#" > 
         <IconButton  onClick={this.onclickImage}> 
           <img 
               src={f10}
                    
               width="130px"
                     height="200px"
          /></IconButton>
          </a>
        
         </Box>

         <Box className="frame" ml={3}>
         <a href="#" > 
         <IconButton  onClick={this.onclickImage}> 
           <img 
               src={f11}
                    
               width="130px"
                     height="200px"
          /></IconButton>
          </a>
        
         </Box>
 
         <Box className="frame" ml={3}>
         <a href="#" > 
         <IconButton  onClick={this.onclickImage}> 
           <img 
               src={f12}
                    
               width="130px"
                     height="200px"
          /></IconButton>
          </a>
        
         </Box>
         <Box className="frame" ml={3}>
         <a href="#" > 
         <IconButton  onClick={this.onclickImage}> 
           <img 
               src={f13}
                    
               width="130px"
                     height="200px"
          /></IconButton>
          </a>
        
         </Box>


         <Box className="frame" ml={3}>
         <a href="#" > 
         <IconButton  onClick={this.onclickImage}> 
           <img 
               src={f14}
                    
               width="130px"
                     height="200px"
          /></IconButton>
          </a>
        
         </Box>

         </Box>
         </Box>
         </Box>
            </div>
        );
    }
}

export default FamilyPics;