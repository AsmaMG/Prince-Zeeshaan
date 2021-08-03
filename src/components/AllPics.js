import { Grid } from '@material-ui/core';
import { Box,  Typography } from '@material-ui/core';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';


import a from "../images/a.jpeg"
import b from "../images/b.jpeg"
import c from "../images/c.jpeg"
import d from "../images/d.jpg"
import e from "../images/e.jpeg"
import f from "../images/f.jpeg"
import g from "../images/g.jpg"
import h from "../images/h.jpeg"
import i from "../images/i.jpeg"
import j from "../images/j.jpeg"
import k from "../images/k.jpeg"
import l from "../images/l.jpeg"
import m from "../images/m.jpeg"
import n from "../images/n.jpeg"
import o from "../images/o.jpeg"
import p from "../images/p.jpeg"
import q from "../images/q.jpeg"
import r from "../images/r.jpeg"
import s from "../images/s.jpeg"
import t from "../images/t.jpeg"
import u from "../images/u.jpeg"
import v from "../images/v.jpeg"
import w from "../images/w.jpeg"
import x from "../images/x.jpeg"
import y from "../images/y.jpeg"
import z from "../images/z.jpeg"

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

class AllPics extends Component {

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
               src={r}
                    
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
               src={b}
                    
               width="130px"
                     height="200px"
          /></IconButton>
          </a>
          </Box>
         
          <Box className="frame" ml={3}>
         <a href="#" >  
         <IconButton  onClick={this.onclickImage}> 
          <img 
               src={c}
                    
               width="400px"
                     height="200px"
          /></IconButton>
          </a>
          </Box>
          <Box className="frame">
         <a href="#" >  
         <IconButton  onClick={this.onclickImage}> 
          <img 
               src={e}
                    
               width="130px"
                     height="200px"
          /></IconButton>
          </a>
          </Box>
          <Box className="frame" ml={3}>
         <a href="#" > 
         <IconButton  onClick={this.onclickImage}> 
           <img 
               src={f}
                    
               width="130px"
                     height="200px"
          /></IconButton>
          </a>
        
         </Box>
         <Box className="frame" ml={3}>
         <a href="#" > 
         <IconButton  onClick={this.onclickImage}> 
           <img 
               src={i}
                    
               width="130px"
                     height="200px"
          /></IconButton>
          </a>
        
         </Box>
         <Box className="frame" ml={3}>
         <a href="#" > 
         <IconButton  onClick={this.onclickImage}> 
           <img 
               src={j}
                    
               width="130px"
                     height="200px"
          /></IconButton>
          </a>
        
         </Box>
         <Box className="frame" ml={3}>
         <a href="#" > 
         <IconButton  onClick={this.onclickImage}> 
           <img 
               src={k}
                    
               width="130px"
                     height="200px"
          /></IconButton>
          </a>
        
         </Box>
         <Box className="frame" ml={3}>
         <a href="#" > 
         <IconButton  onClick={this.onclickImage}> 
           <img 
               src={l}
                    
               width="130px"
                     height="200px"
          /></IconButton>
          </a>
        
         </Box>
         <Box className="frame" ml={3}>
         <a href="#" > 
         <IconButton  onClick={this.onclickImage}> 
           <img 
               src={n}
                    
               width="130px"
                     height="200px"
          /></IconButton>
          </a>
        
         </Box>
         <Box className="frame" ml={3}>
         <a href="#" > 
         <IconButton  onClick={this.onclickImage}> 
           <img 
               src={o}
                    
               width="130px"
                     height="200px"
          /></IconButton>
          </a>
        
         </Box>
         <Box className="frame" ml={3}>
         <a href="#" > 
         <IconButton  onClick={this.onclickImage}> 
           <img 
               src={p}
                    
               width="130px"
                     height="200px"
          /></IconButton>
          </a>
        
         </Box>
         <Box className="frame" ml={3}>
         <a href="#" > 
         <IconButton  onClick={this.onclickImage}> 
           <img 
               src={q}
                    
               width="130px"
                     height="200px"
          /></IconButton>
          </a>
        
         </Box>
         <Box className="frame" ml={3}>
         <a href="#" > 
         <IconButton  onClick={this.onclickImage}> 
           <img 
               src={s}
                    
               width="130px"
                     height="200px"
          /></IconButton>
          </a>
        
         </Box>
         <Box className="frame" ml={3}>
         <a href="#" > 
         <IconButton  onClick={this.onclickImage}> 
           <img 
               src={t}
                    
               width="130px"
                     height="200px"
          /></IconButton>
          </a>
        
         </Box>
         <Box className="frame" ml={3}>
         <a href="#" > 
         <IconButton  onClick={this.onclickImage}> 
           <img 
               src={v}
                    
               width="130px"
                     height="200px"
          /></IconButton>
          </a>
        
         </Box>
         <Box className="frame" ml={3}>
         <a href="#" > 
         <IconButton  onClick={this.onclickImage}> 
           <img 
               src={u}
                    
               width="130px"
                     height="200px"
          /></IconButton>
          </a>
        
         </Box>
         <Box className="frame" ml={3}>
         <a href="#" > 
         <IconButton  onClick={this.onclickImage}> 
           <img 
               src={w}
                    
               width="130px"
                     height="200px"
          /></IconButton>
          </a>
        
         </Box>
         <Box className="frame" ml={3}>
         <a href="#" > 
         <IconButton  onClick={this.onclickImage}> 
           <img 
               src={x}
                    
               width="138px"
                     height="200px"
          /></IconButton>
          </a>
        
         </Box>
         <Box className="frame" ml={3}>
         <a href="#" > 
         <IconButton  onClick={this.onclickImage}> 
           <img 
               src={y}
                    
               width="130px"
                     height="200px"
          /></IconButton>
          </a>
        
         </Box>
         <Box className="frame" ml={3}>
         <a href="#" > 
         <IconButton  onClick={this.onclickImage}> 
           <img 
               src={z}
                    
               width="130px"
                     height="200px"
          /></IconButton>
          </a>
        
         </Box>
      
 
 
 <Fab color="primary" aria-label="add" style={{width:"40px"}}>
        <AddIcon />

</Fab>

         </Box>
         </Box>
         </Box>
            </div>
        );
    }
}

export default AllPics;