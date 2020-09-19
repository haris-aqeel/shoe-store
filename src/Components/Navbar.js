import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { Link } from 'react-router-dom'
import Home from '../Pages/Home'

import HomeIcon from '@material-ui/icons/Home';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import InfoIcon from '@material-ui/icons/Info';
import StarsIcon from '@material-ui/icons/Stars';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ClearIcon from '@material-ui/icons/Clear';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: '#b32727'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#b32727',
    color: 'white',
  },
  navIcon:{
    color: '#fff',
    cursor: 'pointer'
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  const ChangeRoute = (path) => {
    <Link to='/products'>
      
    </Link>
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
          Welcome to Haris Aqeel Shoe Store!
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
          <List>
            <ListItem button onClick={() => ChangeRoute('/')}>
              <ListItemIcon className={classes.navIcon}> <HomeIcon/> </ListItemIcon>
              <ListItemText primary={'Home'} />
            </ListItem>
            <ListItem button onClick={() => ChangeRoute('/products')}>
              <ListItemIcon className={classes.navIcon}> <StorefrontIcon /> </ListItemIcon>
              <ListItemText primary={'Products'} />
            </ListItem>
            <ListItem button onClick={() => ChangeRoute('/about')}>
              <ListItemIcon className={classes.navIcon}> <InfoIcon /> </ListItemIcon>
              <ListItemText primary={'About Us'} />
            </ListItem>
            <ListItem button onClick={() => ChangeRoute('/contact')}>
              <ListItemIcon className={classes.navIcon}> <ContactMailIcon /> </ListItemIcon>
              <ListItemText primary={'Contact Us'} />
            </ListItem>
            <Divider />
          <List>
            <ListItem button onClick={() => alert('This functionality will be implemented soon...')}>
              <ListItemIcon className={classes.navIcon}> <LoyaltyIcon /> </ListItemIcon>
              <ListItemText primary={'Membership'} />
            </ListItem>
            <ListItem button onClick={() => alert('This functionality will be implemented soon...')}>
              <ListItemIcon className={classes.navIcon}> <SubscriptionsIcon /> </ListItemIcon>
              <ListItemText primary={'Subscribe'} />
            </ListItem>
            <ListItem button onClick={() => alert('This functionality will be implemented soon...')}>
              <ListItemIcon className={classes.navIcon}> <StarsIcon /> </ListItemIcon>
              <ListItemText primary={'Favourites'} />
            </ListItem>
          </List>
          <Divider />

          </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
         
        </Typography>
        <Typography paragraph>
         
        </Typography>
      </main>
    </div>
  );
}
