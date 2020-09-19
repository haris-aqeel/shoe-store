import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';

import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { Link } from 'react-router-dom'


import HomeIcon from '@material-ui/icons/Home';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import InfoIcon from '@material-ui/icons/Info';
import StarsIcon from '@material-ui/icons/Stars';


import DisplayData from './DisplayData'
import DisplayShoesList from './DisplayShoesList'
import ProductInd from '../Pages/Productind'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    
    
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
      backgroundColor: '#b32727'
      
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: '#b32727'

    },
  },
  navIcon: {
   color: '#fff',
  },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
      
    },
  },
  //necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#b32727'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  
  if (props.data!==undefined){

  var x = (props.data.filter((curr)=>{
    return curr.rating === 5  }))

  var y = (props.data.filter((curr)=>{
    return curr.reviewsCount > 66 }))
  }

  if (props.ShoesList!==undefined){

    var shoesList =  props.ShoesList;

  
    }


  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
        <List>
          <Link to='/' style={{color: '#fff', textDecoration: 'none'}}>
            <ListItem >
              <ListItemIcon className={classes.navIcon}> <HomeIcon/> </ListItemIcon>
              <ListItemText primary={'Home'} />
              </ListItem>
          </Link>
          <Link to='/products'  style={{color: '#fff', textDecoration: 'none'}}>
            <ListItem >
              <ListItemIcon className={classes.navIcon}> <StorefrontIcon /> </ListItemIcon>
              <ListItemText primary={'Products'} />
            </ListItem>
          </Link>
          <Link to='/about'  style={{color: '#fff', textDecoration: 'none'}}>
            <ListItem >
               <ListItemIcon className={classes.navIcon}> <InfoIcon /> </ListItemIcon>
               <ListItemText primary={'About Us'} />
            </ListItem>
          </Link>
          <Link to="/contact"  style={{color: '#fff', textDecoration: 'none'}}>
            <ListItem >
                <ListItemIcon className={classes.navIcon}> <ContactMailIcon /> </ListItemIcon>
                <ListItemText primary={'Contact Us'} />
            </ListItem>
           </Link>
        </List>
      <Divider />
          <List>
            <ListItem button onClick={() => alert('This functionality will be implemented soon...')}>
              <ListItemIcon className={classes.navIcon} > <LoyaltyIcon /> </ListItemIcon>
              <ListItemText primary={'Membership'}  style={{color: '#fff', textDecoration: 'none'}} />
            </ListItem>
            <ListItem button onClick={() => alert('This functionality will be implemented soon...')}>
              <ListItemIcon className={classes.navIcon}> <SubscriptionsIcon /> </ListItemIcon>
              <ListItemText primary={'Subscribe'}  style={{color: '#fff', textDecoration: 'none'}}/>
            </ListItem>
            <ListItem button onClick={() => alert('This functionality will be implemented soon...')}>
              <ListItemIcon className={classes.navIcon}> <StarsIcon /> </ListItemIcon>
              <ListItemText primary={'Favourites'}  style={{color: '#fff', textDecoration: 'none'}}/>
            </ListItem>
          </List>
       <Divider />

    </div>)
const container = window !== undefined ? () => window().document.body : undefined;

return (
  <div className={classes.root}>
    <CssBaseline />
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar style={{backgroundColor: '#b32727'}}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Welcome to ShoeStore
        </Typography>
        <MenuItem>
         <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={1} color="secondary" >
              <ShoppingCartIcon />
              </Badge>
          </IconButton>
          </MenuItem>
      </Toolbar>
    </AppBar>
    <nav className={classes.drawer} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
            
          }}
          
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
    <main className={classes.content}>
      <div className={classes.toolbar} />
          {
            
            
           
           props.data === undefined & props.ShoesList!==undefined? (

                 <DisplayShoesList shoesList={shoesList} />
           ):(
                 
               <DisplayData datas={x} reviewed={y}/>
               
          ) 
           
           
          }

    </main>
  </div>
);
}

ResponsiveDrawer.propTypes = {
/**
 * Injected by the documentation to work in an iframe.
 * You won't need it on your project.
 */
window: PropTypes.func,
};

export default ResponsiveDrawer;
