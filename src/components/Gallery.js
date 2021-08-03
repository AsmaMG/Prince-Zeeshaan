import { Grid } from '@material-ui/core';
import { Box, Typography } from '@material-ui/core';
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
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Zoom from '@material-ui/core/Zoom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import Loader from './Loader';




class Gallery extends Component {
    render() {
        return (
            <div className="container "> 
      {/* <Loader/> */}
            <Box ml={24}>          
            <Box align="center" mb={1} mt={-3}>
          <Box bgcolor="white" borderRadius="10px" width={200} padding={1}  display="flex" flexDirection="row" justifyContent="space-between">
              <Link className="gallLink" to="/allpics" ><Typography variant="subtitle"><b>ALL</b></Typography></Link>
              <Link className="gallLink" to="" > <Typography variant="subtitle"><b>BIRTHDAY</b></Typography></Link>
              <Link className="gallLink" to="familypics" > <Typography variant="subtitle"><b>FAMILY</b></Typography></Link>
              
          </Box>
          {/* <SimpleZoom/> */}
          </Box>
          <Grid container>
        
          <a href="#" ><img 
               src={g}
               height="548x" width="100%"
          /></a>
           </Grid> 
           </Box>           
            </div>
        );
    }
}

export default Gallery;

const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
  },
  container: {
    display: 'flex',
  },
  paper: {
    margin: theme.spacing(1),
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

 function SimpleZoom() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className={classes.root}>

      {/* <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show All"
      /> */}
      <div className={classes.container}>
        <Zoom in={checked}>
          <Paper elevation={4} className={classes.paper}>
            {/* <svg className={classes.svg}>
              <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
            </svg> */}
            <a href="#" >   <img 
                src={e}
                     
                      width="250px"
                      height="250px"
           /></a>

          </Paper>
          
        </Zoom>
        <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
          <Paper elevation={4} className={classes.paper}>
            {/* <svg className={classes.svg}>
              <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
            </svg> */}
            <a href="#" >   <img 
                src={f}
                     
                      width="300px"
                      height="300px"
           /></a>
           
          </Paper>
        </Zoom>
        <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
          <Paper elevation={4} className={classes.paper}>
            {/* <svg className={classes.svg}>
              <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
            </svg> */}
            <a href="#" ><img 
                src={g}
                     
                      width="300px"
                      height="300px"
           /></a>
           
          </Paper>
        </Zoom>
        <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
          <Paper elevation={4} className={classes.paper}>
            {/* <svg className={classes.svg}>
              <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
            </svg> */}
            <a href="#" >   <img 
                src={h}
                     
                      width="300px"
                      height="300px"
           /></a>
           
          </Paper>
        </Zoom>
        <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
          <Paper elevation={4} className={classes.paper}>
            {/* <svg className={classes.svg}>
              <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
            </svg> */}
            <a href="#" >   <img 
                src={i}
                     
                      width="300px"
                      height="300px"
           /></a>
           
          </Paper>
        </Zoom>
        <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
          <Paper elevation={4} className={classes.paper}>
            {/* <svg className={classes.svg}>
              <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
            </svg> */}
            <a href="#" >   <img 
                src={j}
                     
                      width="300px"
                      height="300px"
           /></a>
           
          </Paper>
        </Zoom>
        <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
          <Paper elevation={4} className={classes.paper}>
            {/* <svg className={classes.svg}>
              <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
            </svg> */}
            <a href="#" >   <img 
                src={j}
                     
                      width="300px"
                      height="300px"
           /></a>
           
          </Paper>
        </Zoom>
        <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
          <Paper elevation={4} className={classes.paper}>
            {/* <svg className={classes.svg}>
              <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
            </svg> */}
            <a href="#" >   <img 
                src={k}
                     
                      width="300px"
                      height="300px"
           /></a>
           
          </Paper>
        </Zoom>
        <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
          <Paper elevation={4} className={classes.paper}>
            {/* <svg className={classes.svg}>
              <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
            </svg> */}
            <a href="#" >   <img 
                src={l}
                     
                      width="300px"
                      height="300px"
           /></a>
           
          </Paper>
        </Zoom>
        <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
          <Paper elevation={4} className={classes.paper}>
            {/* <svg className={classes.svg}>
              <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
            </svg> */}
            <a href="#" >   <img 
                src={m}
                     
                      width="300px"
                      height="300px"
           /></a>
           
          </Paper>
        </Zoom>
        <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
          <Paper elevation={4} className={classes.paper}>
            {/* <svg className={classes.svg}>
              <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
            </svg> */}
            <a href="#" >   <img 
                src={n}
                     
                      width="300px"
                      height="300px"
           /></a>
           
          </Paper>
        </Zoom>
        <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
          <Paper elevation={4} className={classes.paper}>
            {/* <svg className={classes.svg}>
              <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
            </svg> */}
            <a href="#" >   <img 
                src={o}
                     
                      width="300px"
                      height="300px"
           /></a>
           
          </Paper>
        </Zoom>
        <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
          <Paper elevation={4} className={classes.paper}>
            {/* <svg className={classes.svg}>
              <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
            </svg> */}
            <a href="#" >   <img 
                src={p}
                     
                      width="300px"
                      height="300px"
           /></a>
           
          </Paper>
        </Zoom>
        <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
          <Paper elevation={4} className={classes.paper}>
            {/* <svg className={classes.svg}>
              <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
            </svg> */}
            <a href="#" >   <img 
                src={q}
                     
                      width="300px"
                      height="300px"
           /></a>
           
          </Paper>
        </Zoom>
        
      </div>

    
    </div>
  );
}
