import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { Box,Button,  Typography ,Breadcrumbs} from '@material-ui/core';
import {Link} from 'react-router-dom'
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
import z from "../images/z.jpeg";
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Zoom from '@material-ui/core/Zoom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';

class FirstImage extends Component {
    constructor(props)
    {
        super(props); 
        this.state={
            nextIcon:<span className="symbol">&gt;</span>,
            prevIcon: <span className="symbol">&lt;</span>,
        }
    }
// function CarouselComponent() {
//     const [nextIcon, setNextIcon] = useState(
//       <span className="symbol">&gt;</span>
//     );
//     const [prevIcon, setPrevIcon] = useState(
//       <span className="symbol">&lt;</span>
//     );

gotoHomePage=()=>{
    this.props.history.push({
        pathname:"/allpics"
    })
    }

    render() {
        return (
            <div className="container">

<Grid container>
    <Grid item xs={12}>
   <Box ml={25} display="flex" flexDirection="row " justifyContent="space-between"  >
   <Breadcrumbs   >
      <Link  to="/"  className="breadcrums">
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
    </Breadcrumbs>
    <IconButton  onClick={this.gotoHomePage}>
    <CloseIcon color="primary" /></IconButton>
    </Box> 
    </Grid>
</Grid>

          
    
<Grid container>
            <Carousel
        indicators={false}
      // interval={2000}
        nextIcon={this.state.nextIcon}
        prevIcon={this.state.prevIcon}
        fade
      >
     

        <Carousel.Item>
          <Box align="center" ml={45}>
          <img
            // className="d-block image_carousel"
            src={a}
             height="526px"
           
            width="50%"
            alt="First slide"
          />
         </Box>
         
        </Carousel.Item>

        <Carousel.Item>
        <Box align="center" ml={35}>
          <img
            // className="d-block image_carousel"
            src={b}
            alt="Second slide"
            height="526px"
           
           width="65%"
            // height="10%"
          /></Box>

      
        </Carousel.Item>
        <Carousel.Item>
        <Box align="center" ml={40}>
          <img
            className="d-block image_carousel"
            alt="Third slide"
            src={c}
            // style={{ border: "1px solid black" }}
            height="526px"
           
            width="75%"
          /></Box>
      
        </Carousel.Item>


        <Carousel.Item>
        <Box align="center" ml={40}>
          <img
            className="d-block image_carousel"
            alt="Third slide"
            src={m}
            // style={{ border: "1px solid black" }}
            height="526px"
           
            width="75%"
          /></Box>
      
        </Carousel.Item>
        <Carousel.Item>
        <Box align="center" ml={40}>
          <img
            className="d-block image_carousel"
            alt="Third slide"
            src={e}
            // style={{ border: "1px solid black" }}
            height="526px"
           
            width="75%"
          /></Box>
      
        </Carousel.Item>
        <Carousel.Item>
        <Box align="center" ml={40}>
          <img
            className="d-block image_carousel"
            alt="Third slide"
            src={f}
            // style={{ border: "1px solid black" }}
            height="526px"
           
            width="75%"
          /></Box>
      
        </Carousel.Item>
        <Carousel.Item>
        <Box align="center" ml={40}>
          <img
            className="d-block image_carousel"
            alt="Third slide"
            src={n}
            // style={{ border: "1px solid black" }}
            height="526px"
           
            width="75%"
          /></Box>
      
        </Carousel.Item>
        <Carousel.Item>
        <Box align="center" ml={40}>
          <img
            className="d-block image_carousel"
            alt="Third slide"
            src={h}
            // style={{ border: "1px solid black" }}
            height="526px"
           
            width="75%"
          /></Box>
      
        </Carousel.Item>
        <Carousel.Item>
        <Box align="center" ml={40}>
          <img
            className="d-block image_carousel"
            alt="Third slide"
            src={i}
            // style={{ border: "1px solid black" }}
            height="526px"
           
            width="75%"
          /></Box>
      
        </Carousel.Item>
        <Carousel.Item>
        <Box align="center" ml={40}>
          <img
            className="d-block image_carousel"
            alt="Third slide"
            src={j}
            // style={{ border: "1px solid black" }}
            height="526px"
           
            width="75%"
          /></Box>
      
        </Carousel.Item>
        <Carousel.Item>
        <Box align="center" ml={40}>
          <img
            className="d-block image_carousel"
            alt="Third slide"
            src={k}
            // style={{ border: "1px solid black" }}
            height="526px"
           
            width="75%"
          /></Box>
      
        </Carousel.Item>
        <Carousel.Item>
        <Box align="center" ml={40}>
          <img
            className="d-block image_carousel"
            alt="Third slide"
            src={l}
            // style={{ border: "1px solid black" }}
            height="526px"
           
            width="75%"
          /></Box>
      
        </Carousel.Item>

        <Carousel.Item>
        <Box align="center" ml={40}>
          <img
            className="d-block image_carousel"
            alt="Third slide"
            src={l}
            // style={{ border: "1px solid black" }}
            height="526px"
           
            width="75%"
          /></Box>
      
        </Carousel.Item>
        <Carousel.Item>
        <Box align="center" ml={40}>
          <img
            className="d-block image_carousel"
            alt="Third slide"
            src={l}
            // style={{ border: "1px solid black" }}
            height="526px"
           
            width="75%"
          /></Box>
      
        </Carousel.Item>
        <Carousel.Item>
        <Box align="center" ml={40}>
          <img
            className="d-block image_carousel"
            alt="Third slide"
            src={l}
            // style={{ border: "1px solid black" }}
            height="526px"
           
            width="75%"
          /></Box>
      
        </Carousel.Item>
        <Carousel.Item>
        <Box align="center" ml={40}>
          <img
            className="d-block image_carousel"
            alt="Third slide"
            src={o}
            // style={{ border: "1px solid black" }}
            height="526px"
           
            width="75%"
          /></Box>
      
        </Carousel.Item>
        <Carousel.Item>
        <Box align="center" ml={40}>
          <img
            className="d-block image_carousel"
            alt="Third slide"
            src={p}
            // style={{ border: "1px solid black" }}
            height="526px"
           
            width="75%"
          /></Box>
      
        </Carousel.Item>
        <Carousel.Item>
        <Box align="center" ml={40}>
          <img
            className="d-block image_carousel"
            alt="Third slide"
            src={q}
            // style={{ border: "1px solid black" }}
            height="526px"
           
            width="75%"
          /></Box>
      
        </Carousel.Item>
        <Carousel.Item>
        <Box align="center" ml={40}>
          <img
            className="d-block image_carousel"
            alt="Third slide"
            src={r}
            // style={{ border: "1px solid black" }}
            height="526px"
           
            width="75%"
          /></Box>
      
        </Carousel.Item>
        <Carousel.Item>
        <Box align="center" ml={40}>
          <img
            className="d-block image_carousel"
            alt="Third slide"
            src={s}
            // style={{ border: "1px solid black" }}
            height="526px"
           
            width="75%"
          /></Box>
      
        </Carousel.Item>
        <Carousel.Item>
        <Box align="center" ml={40}>
          <img
            className="d-block image_carousel"
            alt="Third slide"
            src={t}
            // style={{ border: "1px solid black" }}
            height="526px"
           
            width="75%"
          /></Box>
      
        </Carousel.Item>
        <Carousel.Item>
        <Box align="center" ml={40}>
          <img
            className="d-block image_carousel"
            alt="Third slide"
            src={u}
            // style={{ border: "1px solid black" }}
            height="526px"
           
            width="75%"
          /></Box>
      
        </Carousel.Item>
        <Carousel.Item>
        <Box align="center" ml={40}>
          <img
            className="d-block image_carousel"
            alt="Third slide"
            src={v}
            // style={{ border: "1px solid black" }}
            height="526px"
           
            width="75%"
          /></Box>
      
        </Carousel.Item>
        <Carousel.Item>
        <Box align="center" ml={40}>
          <img
            className="d-block image_carousel"
            alt="Third slide"
            src={w}
            // style={{ border: "1px solid black" }}
            height="526px"
           
            width="75%"
          /></Box>
      
        </Carousel.Item>
        <Carousel.Item>
        <Box align="center" ml={40}>
          <img
            className="d-block image_carousel"
            alt="Third slide"
            src={x}
            // style={{ border: "1px solid black" }}
            height="526px"
           
            width="75%"
          /></Box>
      
        </Carousel.Item>
        <Carousel.Item>
        <Box align="center" ml={40}>
          <img
            className="d-block image_carousel"
            alt="Third slide"
            src={y}
            // style={{ border: "1px solid black" }}
            height="526px"
           
            width="75%"
          /></Box>
      
        </Carousel.Item>
        <Carousel.Item>
        <Box align="center" ml={40}>
          <img
            className="d-block image_carousel"
            alt="Third slide"
            src={z}
            // style={{ border: "1px solid black" }}
            height="526px"
           
            width="75%"
          /></Box>
      
        </Carousel.Item>




      </Carousel></Grid>

        </div>
        );
    }
}

export default FirstImage;