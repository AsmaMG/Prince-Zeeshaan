import { Box } from '@material-ui/core';
import React, { Component } from 'react';
import zeesh from "../images/d.jpg"
class HomeContents extends Component {
    render() {
        return (

            <div >
            <marquee direction = "right" style={{color:"white"}} scrollamount={15}>You can contact me to this number:<span style={{color:"red"}}>9999999999</span></marquee>
            <Box align="right" mt={"-30px"} ml={30} mr={1}>
                  <img src={zeesh} height="605px" width="94%"/></Box>
            </div>
        );
    }
}

export default HomeContents;

