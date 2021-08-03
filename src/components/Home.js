import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { GrGallery } from "react-icons/gr";
import Avatar from "@material-ui/core/Avatar";
import b from "../images/b.jpeg";
import {RiGalleryFill } from "react-icons/ri";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { NavLink, useHistory } from "react-router-dom";
import { Box, Tooltip } from "@material-ui/core";

import { AiFillTwitterCircle } from "react-icons/ai";

import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { SiSkype } from "react-icons/si";
import HomeContents from "./HomeContents";
import ChildCareIcon from '@material-ui/icons/ChildCare';
import TwitterIcon from '@material-ui/icons/Twitter';
import {FaFacebookF} from "react-icons/fa";


const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#272829",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: "#040b14",
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#040b14",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(1),
    marginTop: "-60px",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <AppBar position="fixed" className={classes.appBar}> */}
      {/* <Toolbar>
          <Typography variant="h6" noWrap>
            Permanent drawer
          </Typography>
        </Toolbar> */}
      {/* </AppBar> */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        {/* <Divider /> */}
        <Box align="center" mt={-6}>
          <Box bgcolor="gray" borderRadius={200} width={130} p={1}>
            <Avatar
              alt="Remy Sharp"
              src={b}
              style={{ width: 115, height: 115 }}
            />
          </Box>
        </Box>

        <Box ml={5} mt={1} mb={1}>
          <Typography variant="h6" style={{color:"white"}}>
            <b>Mohammed Zeeshaan</b>
          </Typography>
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-evenly "
          mb={2}
        >
          <Box className="iconcontents" ><TwitterIcon className="socialmedia" /></Box>
          <Box className="iconcontents" > <FaFacebookF className="socialmedia" /></Box>
          <Box className="iconcontents" > <RiInstagramFill className="socialmedia" /></Box>
          <Box className="iconcontents" ><SiSkype className="socialmedia" /></Box> 
        </Box>

        <Box style={{ marginTop: "-20px" }}>
          <NavLink to="/homecontents" activeClassName="active">
            <ListItem className="sidenav_btn" button>
              <Tooltip title="Home" arrow>
                <ListItemIcon>
                  {/* <img
                      src={TeamIcon}
                      className="sidenav_icon"
                      width="25px"
                      height="30px"
                    /> */}
                  <AiOutlineHome className="iconsStyle" />
                </ListItemIcon>
              </Tooltip>
              <Typography
                variant="body1"
                component="p"
                className="navtest"
              >
                Home
              </Typography>
            </ListItem>
          </NavLink>
        </Box>
        <Box style={{ marginTop: "-20px" }} >
          <NavLink to="/about" activeClassName="active">
            <ListItem className="sidenav_btn" button>
              <Tooltip title="About" arrow>
                <ListItemIcon>
                  {/* <img
                      src={TeamIcon}
                      className="sidenav_icon"
                      width="25px"
                      height="30px"
                    /> */}
                  <AiOutlineUser className="iconsStyle" />
                </ListItemIcon>
              </Tooltip>
              <Typography
                variant="body1"
                component="p"
                className="navtest"
              >
                About
              </Typography>
            </ListItem>
          </NavLink>
        </Box>

        <Box style={{ marginTop: "-20px" }} >
          <NavLink to="/gallery" activeClassName="active">
            <ListItem className="sidenav_btn" button>
              <Tooltip title=" Gallery" arrow>
                <ListItemIcon>
                  {/* <img
                      src={TeamIcon}
                      className="sidenav_icon"
                      width="25px"
                      height="30px"
                    /> */}
                    <Box color="white">
                  <RiGalleryFill className="iconsStyle"  /></Box>
                </ListItemIcon>
              </Tooltip>
              <Typography
                variant="body1"
                component="p"
                className="navtest"
              >
                Gallery
              </Typography>
            </ListItem>
          </NavLink>
        </Box>











        <Box style={{ marginTop: "-20px" }}>
          {/* <NavLink to="/gallery" activeClassName="active"> */}
            <ListItem className="sidenav_btn" button>
              <Tooltip title=" Gallery" arrow>
                <ListItemIcon>
                  {/* <img
                      src={TeamIcon}
                      className="sidenav_icon"
                      width="25px"
                      height="30px"
                    /> */}
                  <ChildCareIcon className="iconsStyle" />
                </ListItemIcon>
              </Tooltip>
              {/* <Typography
                variant="body1"
                component="p"
                className="signin_text create text-dark"
              > */}
              <a href="https://www.verywellfamily.com/best-free-educational-websites-for-kids-3129084">
              <span  className="navtest">Kids Tutorials</span>
              </a>
              
              {/* </Typography> */}
            </ListItem>
          {/* </NavLink> */}
        </Box>


        {/* <List>
          {['Home', 'About', 'Gallery'].map((text, index) => (
            <NavLink to="/about" activeClassName="active">
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <AiOutlineHome/> :  <AiOutlineUser/>}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem></NavLink>
          ))}
        </List> */}

        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text , index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>

      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  );
}
